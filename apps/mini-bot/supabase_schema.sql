-- Enterprise SaaS HotelBot Schema

-- 0. Clean up old miniature tables if they exist
DROP TABLE IF EXISTS public.bookings CASCADE;
DROP TABLE IF EXISTS public.guests CASCADE;
DROP TABLE IF EXISTS public.rooms CASCADE;
DROP TABLE IF EXISTS public.hotels CASCADE;

-- 1. Create Hotels (Tenants) table
CREATE TABLE IF NOT EXISTS public.hotels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    telegram_bot_token TEXT UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 2. Create Guests table (Isolated per Hotel)
CREATE TABLE IF NOT EXISTS public.guests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID REFERENCES public.hotels(id) ON DELETE CASCADE,
    telegram_id BIGINT NOT NULL,
    username TEXT,
    
    -- Receptionist Professional Details
    full_name TEXT,
    email TEXT,
    phone_number TEXT,
    passport_or_id_number TEXT,
    nationality TEXT,
    home_address TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    UNIQUE(hotel_id, telegram_id)
);

-- 3. Create Rooms table (Isolated per Hotel)
CREATE TABLE IF NOT EXISTS public.rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID REFERENCES public.hotels(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    price_per_night NUMERIC NOT NULL,
    capacity INTEGER NOT NULL DEFAULT 2,
    image_urls TEXT[] DEFAULT '{}',
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 4. Create Bookings table (Isolated per Hotel)
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID REFERENCES public.hotels(id) ON DELETE CASCADE,
    guest_id UUID REFERENCES public.guests(id) ON DELETE CASCADE,
    room_id UUID REFERENCES public.rooms(id) ON DELETE RESTRICT,
    
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    guest_count INTEGER NOT NULL DEFAULT 1,
    special_requests TEXT,
    estimated_arrival_time TEXT,
    
    total_price NUMERIC NOT NULL,
    status TEXT DEFAULT 'confirmed',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 5. Disable RLS for backend bot access
ALTER TABLE public.hotels DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.guests DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings DISABLE ROW LEVEL SECURITY;

-- 6. Insert Seed Data
DO $$
DECLARE
  hotel_id UUID;
BEGIN
  -- Insert The Grand Continental as our first tenant
  INSERT INTO public.hotels (name, telegram_bot_token) 
  VALUES ('The Grand Continental', '8897877243:AAEDm8_B6tRrrbGmUZefHAXvqXoAVJejS68')
  ON CONFLICT (telegram_bot_token) DO NOTHING;

  SELECT id INTO hotel_id FROM public.hotels WHERE telegram_bot_token = '8897877243:AAEDm8_B6tRrrbGmUZefHAXvqXoAVJejS68' LIMIT 1;

  IF hotel_id IS NOT NULL THEN
      -- Insert Rooms for this specific hotel
      INSERT INTO public.rooms (hotel_id, name, price_per_night, capacity, image_urls) VALUES
      (hotel_id, 'Standard Room', 99.00, 2, ARRAY['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', 'https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?w=800&q=80']),
      (hotel_id, 'Deluxe Suite', 199.00, 4, ARRAY['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80']),
      (hotel_id, 'Ocean View Room', 149.00, 2, ARRAY['https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80']);
  END IF;
END $$;

-- 7. Add images column to existing rooms (Run this to update your table without dropping it)
ALTER TABLE public.rooms ADD COLUMN IF NOT EXISTS image_urls TEXT[] DEFAULT '{}';
UPDATE public.rooms SET image_urls = ARRAY['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', 'https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?w=800&q=80'] WHERE name = 'Standard Room';
UPDATE public.rooms SET image_urls = ARRAY['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80'] WHERE name = 'Deluxe Suite';
UPDATE public.rooms SET image_urls = ARRAY['https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80'] WHERE name = 'Ocean View Room';
