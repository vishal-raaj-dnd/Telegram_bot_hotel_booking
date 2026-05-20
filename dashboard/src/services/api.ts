const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

export class ApiService {
  private static getHeaders(token?: string) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  private static async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    return data;
  }

  // ── Auth ─────────────────────────────────────────────────────────
  
  static async login(email: string, password: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email, password }),
    });
    return this.handleResponse(res);
  }

  static async register(hotelName: string, email: string, password: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ hotelName, email, password }),
    });
    return this.handleResponse(res);
  }

  static async logout(): Promise<any> {
    const res = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: this.getHeaders(),
    });
    return this.handleResponse(res);
  }

  // ── Analytics ────────────────────────────────────────────────────

  static async getAnalytics(token: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/dashboard/analytics`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });
    return this.handleResponse(res);
  }

  // ── Rooms ────────────────────────────────────────────────────────

  static async getRooms(token: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/dashboard/rooms`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });
    return this.handleResponse(res);
  }

  static async createRoom(token: string, roomData: any): Promise<any> {
    const res = await fetch(`${BASE_URL}/dashboard/rooms`, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify(roomData),
    });
    return this.handleResponse(res);
  }

  static async updateRoom(token: string, id: string, roomData: any): Promise<any> {
    const res = await fetch(`${BASE_URL}/dashboard/rooms/${id}`, {
      method: 'PATCH',
      headers: this.getHeaders(token),
      body: JSON.stringify(roomData),
    });
    return this.handleResponse(res);
  }

  static async deleteRoom(token: string, id: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/dashboard/rooms/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders(token),
    });
    return this.handleResponse(res);
  }

  // ── Bookings ─────────────────────────────────────────────────────

  static async getBookings(token: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/dashboard/bookings`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });
    return this.handleResponse(res);
  }

  // ── Tenant Config / Settings ─────────────────────────────────────

  static async getTenantConfig(token: string, tenantId: string): Promise<any> {
    // Uses the super-admin API endpoints we created in Phase 2
    // For simplicity, tenants can also fetch/update their own settings
    const res = await fetch(`${BASE_URL}/tenants/${tenantId}`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });
    return this.handleResponse(res);
  }

  static async updateTenantConfig(token: string, tenantId: string, data: any): Promise<any> {
    const res = await fetch(`${BASE_URL}/tenants/${tenantId}`, {
      method: 'PATCH',
      headers: this.getHeaders(token),
      body: JSON.stringify(data),
    });
    return this.handleResponse(res);
  }
}
