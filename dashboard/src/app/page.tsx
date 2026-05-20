"use client";

import React, { useState, useEffect } from 'react';
import { 
  Building2, Users, Bed, Calendar, DollarSign, LogOut, Settings as SettingsIcon, 
  Plus, Edit2, Trash2, RefreshCw, Mail, Lock, ArrowRight, Search, CheckCircle, 
  Clock, XCircle, HelpCircle, Eye, EyeOff, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { ApiService } from '../services/api';

const COLORS = ['#6366f1', '#a855f7', '#10b981', '#f59e0b', '#ef4444'];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  
  // Auth state
  const [isLogin, setIsLogin] = useState(true);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authHotelName, setAuthHotelName] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  // App state
  const [activeTab, setActiveTab] = useState<'dashboard' | 'rooms' | 'bookings' | 'settings'>('dashboard');
  const [analytics, setAnalytics] = useState<any>(null);
  const [rooms, setRooms] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [hotelConfig, setHotelConfig] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Booking filtering
  const [bookingSearch, setBookingSearch] = useState('');
  const [bookingStatusFilter, setBookingStatusFilter] = useState('all');

  // Room category modals
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [roomModalMode, setRoomModalMode] = useState<'create' | 'edit'>('create');
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [roomForm, setRoomForm] = useState({
    name: '',
    description: '',
    pricePerNight: '',
    maxGuests: '2',
    totalInventory: '5',
    amenities: '',
    imageUrls: ''
  });

  // Settings form
  const [settingsForm, setSettingsForm] = useState({
    name: '',
    telegramBotToken: '',
    welcomeMessage: '',
    timezone: 'UTC',
    currency: 'USD',
    notificationEmail: '',
    brandColor: '#6366f1',
    defaultLanguage: 'en'
  });
  const [settingsSuccess, setSettingsSuccess] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Check local storage for existing session
    const savedToken = localStorage.getItem('accessToken');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (token && user) {
      fetchData();
    }
  }, [token, user]);

  const fetchData = async (isRef = false) => {
    if (!token) return;
    if (isRef) setRefreshing(true);
    else setLoading(true);

    try {
      const analyticRes = await ApiService.getAnalytics(token);
      setAnalytics(analyticRes.data);

      const roomsRes = await ApiService.getRooms(token);
      setRooms(roomsRes.data);

      const bookingsRes = await ApiService.getBookings(token);
      setBookings(bookingsRes.data);

      const tenantRes = await ApiService.getTenantConfig(token, user.tenantId);
      const tenant = tenantRes.data;
      setHotelConfig(tenant);

      const settings = tenant.settings || {};
      setSettingsForm({
        name: tenant.name || '',
        telegramBotToken: tenant.telegramBotToken || '',
        welcomeMessage: settings.welcomeMessage || '',
        timezone: settings.timezone || 'UTC',
        currency: settings.currency || 'USD',
        notificationEmail: settings.notificationEmail || '',
        brandColor: settings.brandColor || '#6366f1',
        defaultLanguage: settings.defaultLanguage || 'en'
      });
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes('Unauthorized') || err.message?.includes('expired')) {
        handleLogout();
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setAuthLoading(true);

    try {
      if (isLogin) {
        const res = await ApiService.login(authEmail, authPassword);
        const { accessToken, user: loggedUser } = res.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(loggedUser));
        setToken(accessToken);
        setUser(loggedUser);
      } else {
        await ApiService.register(authHotelName, authEmail, authPassword);
        setAuthSuccess('Registration successful! Please log in.');
        setIsLogin(true);
      }
    } catch (err: any) {
      setAuthError(err.message || 'Authentication failed');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    setAnalytics(null);
    setRooms([]);
    setBookings([]);
  };

  const handleRoomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    const payload = {
      name: roomForm.name,
      description: roomForm.description,
      pricePerNight: parseFloat(roomForm.pricePerNight),
      maxGuests: parseInt(roomForm.maxGuests, 10),
      totalInventory: parseInt(roomForm.totalInventory, 10),
      amenities: roomForm.amenities.split(',').map(a => a.trim()).filter(Boolean),
      imageUrls: roomForm.imageUrls.split(',').map(u => u.trim()).filter(Boolean)
    };

    try {
      if (roomModalMode === 'create') {
        await ApiService.createRoom(token, payload);
      } else if (selectedRoomId) {
        await ApiService.updateRoom(token, selectedRoomId, payload);
      }
      setRoomModalOpen(false);
      fetchData();
    } catch (err: any) {
      alert(err.message || 'Failed to save room category');
    }
  };

  const handleEditRoom = (room: any) => {
    setRoomModalMode('edit');
    setSelectedRoomId(room.id);
    setRoomForm({
      name: room.name,
      description: room.description || '',
      pricePerNight: String(room.pricePerNight),
      maxGuests: String(room.maxGuests),
      totalInventory: String(room.totalInventory),
      amenities: (room.amenities || []).join(', '),
      imageUrls: (room.imageUrls || []).join(', ')
    });
    setRoomModalOpen(true);
  };

  const handleDeleteRoom = async (roomId: string) => {
    if (!token || !confirm('Are you sure you want to delete this room category?')) return;
    try {
      await ApiService.deleteRoom(token, roomId);
      fetchData();
    } catch (err: any) {
      alert(err.message || 'Failed to delete room category');
    }
  };

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !user) return;
    setSettingsSuccess(null);

    const payload = {
      name: settingsForm.name,
      telegramBotToken: settingsForm.telegramBotToken,
      settings: {
        welcomeMessage: settingsForm.welcomeMessage,
        timezone: settingsForm.timezone,
        currency: settingsForm.currency,
        notificationEmail: settingsForm.notificationEmail,
        brandColor: settingsForm.brandColor,
        defaultLanguage: settingsForm.defaultLanguage
      }
    };

    try {
      await ApiService.updateTenantConfig(token, user.tenantId, payload);
      setSettingsSuccess('Settings updated successfully!');
      fetchData();
    } catch (err: any) {
      alert(err.message || 'Failed to update settings');
    }
  };

  if (!isMounted) return null;

  // Unauthenticated Layout
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#09090b]">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 glass-card relative z-10 mx-4"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold font-outfit tracking-wide bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              HotelBot SaaS
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              {isLogin ? 'Manage your hotel booking bot' : 'Join as a B2B SaaS partner'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  <label className="text-xs font-semibold text-zinc-400">Hotel / Property Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Grand Royale Hotel"
                      value={authHotelName}
                      onChange={(e) => setAuthHotelName(e.target.value)}
                      className="w-full pl-4 pr-4 py-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-400">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="manager@hotel.com"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm transition-all"
                />
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-400">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm transition-all"
                />
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-zinc-500 hover:text-zinc-300 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-lg text-xs text-red-400">
                {authError}
              </div>
            )}

            {authSuccess && (
              <div className="p-3 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-xs text-emerald-400">
                {authSuccess}
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-indigo-800/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg text-sm transition-all shadow-md shadow-indigo-600/10 flex items-center justify-center gap-2 group cursor-pointer"
            >
              {authLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Partner Account'}
              {!authLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-zinc-500">
            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <button onClick={() => setIsLogin(false)} className="text-indigo-400 hover:underline">
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)} className="text-indigo-400 hover:underline">
                  Log in
                </button>
              </p>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // Filtered bookings list
  const filteredBookings = bookings.filter(b => {
    const matchesSearch = 
      b.reference.toLowerCase().includes(bookingSearch.toLowerCase()) ||
      `${b.guest?.firstName || ''} ${b.guest?.lastName || ''}`.toLowerCase().includes(bookingSearch.toLowerCase());
    
    const matchesStatus = 
      bookingStatusFilter === 'all' || b.status === bookingStatusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#09090b] text-[#f4f4f5]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col justify-between py-6 px-4 shrink-0">
        <div className="space-y-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/10">
              <Building2 className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-wide font-outfit uppercase bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                {hotelConfig?.name || 'HotelBot Hub'}
              </h2>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                {hotelConfig?.subscriptionStatus || 'trialing'}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-zinc-900 text-indigo-400 border-l-2 border-indigo-500 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('rooms')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
                activeTab === 'rooms'
                  ? 'bg-zinc-900 text-indigo-400 border-l-2 border-indigo-500 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <Bed className="w-4 h-4" />
              Room Inventory
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
                activeTab === 'bookings'
                  ? 'bg-zinc-900 text-indigo-400 border-l-2 border-indigo-500 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-zinc-900 text-indigo-400 border-l-2 border-indigo-500 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              <SettingsIcon className="w-4 h-4" />
              Settings
            </button>
          </nav>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-zinc-900">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center font-bold text-xs text-indigo-300">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-zinc-300 truncate">{user?.email}</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout Partner
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-5">
          <div>
            <h1 className="text-2xl font-bold font-outfit text-white">
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'rooms' && 'Room Inventory Manager'}
              {activeTab === 'bookings' && 'Reservations'}
              {activeTab === 'settings' && 'Bot & Partner Configuration'}
            </h1>
            <p className="text-xs text-zinc-500 mt-1">
              Real-time synchronization with Telegram hotel bot webhook
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchData(true)}
              disabled={refreshing}
              className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 rounded-lg transition-all cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            </button>
            {activeTab === 'rooms' && (
              <button
                onClick={() => {
                  setRoomModalMode('create');
                  setRoomForm({
                    name: '',
                    description: '',
                    pricePerNight: '',
                    maxGuests: '2',
                    totalInventory: '5',
                    amenities: '',
                    imageUrls: ''
                  });
                  setRoomModalOpen(true);
                }}
                className="py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add Category
              </button>
            )}
          </div>
        </header>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* ── OVERVIEW TAB ───────────────────────────────────────── */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  {/* Metric Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl space-y-3">
                      <div className="flex justify-between items-center text-zinc-500">
                        <span className="text-xs font-semibold uppercase tracking-wider">Total Bookings</span>
                        <Calendar className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="text-3xl font-bold">{analytics?.stats?.totalBookings || 0}</div>
                      <div className="text-[10px] text-zinc-500">All-time bookings via Telegram</div>
                    </div>
                    <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl space-y-3">
                      <div className="flex justify-between items-center text-zinc-500">
                        <span className="text-xs font-semibold uppercase tracking-wider">Active Bookings</span>
                        <Bed className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="text-3xl font-bold">{analytics?.stats?.activeBookings || 0}</div>
                      <div className="text-[10px] text-zinc-500">Currently active/confirmed stays</div>
                    </div>
                    <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl space-y-3">
                      <div className="flex justify-between items-center text-zinc-500">
                        <span className="text-xs font-semibold uppercase tracking-wider">Total Revenue</span>
                        <DollarSign className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-3xl font-bold">${analytics?.stats?.totalRevenue || 0}</div>
                      <div className="text-[10px] text-zinc-500">Completed payments via Telegram</div>
                    </div>
                    <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl space-y-3">
                      <div className="flex justify-between items-center text-zinc-500">
                        <span className="text-xs font-semibold uppercase tracking-wider">Monthly Revenue</span>
                        <DollarSign className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="text-3xl font-bold">${analytics?.stats?.currentMonthRevenue || 0}</div>
                      <div className={`text-xs ${analytics?.stats?.revenueGrowth >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {analytics?.stats?.revenueGrowth >= 0 ? '+' : ''}{analytics?.stats?.revenueGrowth || 0}% from last month
                      </div>
                    </div>
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Revenue Area Chart */}
                    <div className="lg:col-span-2 p-5 bg-zinc-950 border border-zinc-900 rounded-xl">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Monthly Revenue Flow</h3>
                      <div className="h-64">
                        {analytics?.monthlyStats && analytics.monthlyStats.length > 0 ? (
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={analytics.monthlyStats}>
                              <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} />
                              <YAxis stroke="#71717a" fontSize={12} tickLine={false} />
                              <Tooltip contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a' }} />
                              <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        ) : (
                          <div className="h-full flex items-center justify-center text-zinc-500">No data found</div>
                        )}
                      </div>
                    </div>

                    {/* Room Category breakdown */}
                    <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Popular Room Types</h3>
                      <div className="h-64">
                        {analytics?.roomDistribution && analytics.roomDistribution.length > 0 ? (
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={analytics.roomDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {analytics.roomDistribution.map((entry: any, index: number) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a' }} />
                              <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                          </ResponsiveContainer>
                        ) : (
                          <div className="h-full flex items-center justify-center text-zinc-500">No data found</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Recent Bookings List */}
                  <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Recent Bookings</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead>
                          <tr className="text-xs text-zinc-500 uppercase border-b border-zinc-900 pb-2">
                            <th className="py-2">Reference</th>
                            <th className="py-2">Guest</th>
                            <th className="py-2">Room</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900">
                          {analytics?.recentBookings?.map((b: any) => (
                            <tr key={b.id} className="hover:bg-zinc-900/20 transition-all">
                              <td className="py-3 font-semibold text-indigo-400">{b.reference}</td>
                              <td className="py-3">{b.guestName}</td>
                              <td className="py-3">{b.roomName}</td>
                              <td className="py-3 font-semibold">${b.amount}</td>
                              <td className="py-3 text-zinc-400">{b.date}</td>
                              <td className="py-3">
                                <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${
                                  b.status === 'confirmed' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/30' :
                                  b.status === 'pending' ? 'bg-amber-950/40 text-amber-400 border border-amber-900/30' :
                                  'bg-red-950/40 text-red-400 border border-red-900/30'
                                }`}>
                                  {b.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                          {(!analytics?.recentBookings || analytics.recentBookings.length === 0) && (
                            <tr>
                              <td colSpan={6} className="py-4 text-center text-zinc-500">No recent bookings</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ── ROOMS TAB ─────────────────────────────────────────── */}
              {activeTab === 'rooms' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rooms.map((room) => (
                    <div key={room.id} className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-xl hover:border-zinc-800 transition-all flex flex-col justify-between">
                      <div>
                        {room.imageUrls && room.imageUrls.length > 0 ? (
                          <img
                            src={room.imageUrls[0]}
                            alt={room.name}
                            className="w-full h-48 object-cover border-b border-zinc-900"
                          />
                        ) : (
                          <div className="w-full h-48 bg-zinc-900/50 flex items-center justify-center border-b border-zinc-900">
                            <Bed className="w-12 h-12 text-zinc-700" />
                          </div>
                        )}
                        <div className="p-5 space-y-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-lg text-white">{room.name}</h3>
                            <span className="text-lg font-bold text-indigo-400">${room.pricePerNight} <span className="text-xs text-zinc-500">/ night</span></span>
                          </div>
                          <p className="text-xs text-zinc-400 line-clamp-2">{room.description || 'No description provided.'}</p>
                          <div className="flex flex-wrap gap-1">
                            {room.amenities.map((amenity: string, i: number) => (
                              <span key={i} className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-5 pt-0 border-t border-zinc-900/50 flex items-center justify-between gap-3 mt-4">
                        <div className="text-xs text-zinc-500">
                          Capacity: <span className="font-semibold text-zinc-300">{room.maxGuests} Guests</span> • Inventory: <span className="font-semibold text-zinc-300">{room.totalInventory} Rooms</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditRoom(room)}
                            className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-indigo-400 rounded-lg cursor-pointer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteRoom(room.id)}
                            className="p-2 bg-red-950/20 hover:bg-red-950/40 border border-red-900/30 text-red-400 rounded-lg cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {rooms.length === 0 && (
                    <div className="col-span-full py-16 text-center text-zinc-500">
                      No room categories configured yet. Click "Add Category" to begin.
                    </div>
                  )}
                </div>
              )}

              {/* ── BOOKINGS TAB ──────────────────────────────────────── */}
              {activeTab === 'bookings' && (
                <div className="space-y-4">
                  {/* Filters */}
                  <div className="flex flex-col md:flex-row gap-3 items-center justify-between bg-zinc-950 border border-zinc-900 p-4 rounded-xl">
                    <div className="relative w-full md:max-w-md">
                      <input
                        type="text"
                        placeholder="Search reference or guest name..."
                        value={bookingSearch}
                        onChange={(e) => setBookingSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-zinc-900/50 border border-zinc-800 focus:border-indigo-500 focus:outline-none rounded-lg text-sm text-white"
                      />
                      <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                    </div>
                    <select
                      value={bookingStatusFilter}
                      onChange={(e) => setBookingStatusFilter(e.target.value)}
                      className="w-full md:w-48 px-3 py-2 bg-zinc-900/50 border border-zinc-800 focus:border-indigo-500 focus:outline-none rounded-lg text-sm text-white"
                    >
                      <option value="all">All Statuses</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  {/* Table */}
                  <div className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead>
                          <tr className="text-xs text-zinc-500 uppercase border-b border-zinc-900 bg-zinc-900/20">
                            <th className="p-4">Reference</th>
                            <th className="p-4">Guest</th>
                            <th className="p-4">Room Type</th>
                            <th className="p-4">Dates (Check-in/out)</th>
                            <th className="p-4">Paid</th>
                            <th className="p-4 text-center">Status</th>
                            <th className="p-4">Registered</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900">
                          {filteredBookings.map((b) => (
                            <tr key={b.id} className="hover:bg-zinc-900/10 transition-all">
                              <td className="p-4 font-semibold text-indigo-400">{b.reference}</td>
                              <td className="p-4">
                                <div className="font-semibold text-white">
                                  {b.guest?.firstName || ''} {b.guest?.lastName || ''}
                                </div>
                                <div className="text-[10px] text-zinc-500">{b.guest?.phoneNumber || 'No phone'}</div>
                              </td>
                              <td className="p-4">{b.roomCategory?.name}</td>
                              <td className="p-4">
                                <div className="text-zinc-300 font-semibold">{b.checkIn} → {b.checkOut}</div>
                                <div className="text-[10px] text-zinc-500">{b.nights} nights • {b.guests} guests</div>
                              </td>
                              <td className="p-4 font-bold text-white">${b.amount}</td>
                              <td className="p-4 text-center">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                  b.status === 'confirmed' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/30' :
                                  b.status === 'pending' ? 'bg-amber-950/40 text-amber-400 border border-amber-900/30' :
                                  b.status === 'cancelled' ? 'bg-red-950/40 text-red-400 border border-red-900/30' :
                                  'bg-zinc-900 text-zinc-400 border border-zinc-800'
                                }`}>
                                  {b.status === 'confirmed' && <CheckCircle className="w-3.5 h-3.5" />}
                                  {b.status === 'pending' && <Clock className="w-3.5 h-3.5" />}
                                  {b.status === 'cancelled' && <XCircle className="w-3.5 h-3.5" />}
                                  {b.status}
                                </span>
                              </td>
                              <td className="p-4 text-zinc-500 text-xs">{b.createdAt}</td>
                            </tr>
                          ))}
                          {filteredBookings.length === 0 && (
                            <tr>
                              <td colSpan={7} className="py-16 text-center text-zinc-500">
                                No reservations found matching the filters.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ── SETTINGS TAB ──────────────────────────────────────── */}
              {activeTab === 'settings' && (
                <form onSubmit={handleSettingsSubmit} className="max-w-2xl bg-zinc-950 border border-zinc-900 rounded-xl p-6 space-y-6">
                  {settingsSuccess && (
                    <div className="p-3 bg-emerald-950/30 border border-emerald-900/50 rounded-lg text-xs text-emerald-400 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      {settingsSuccess}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-400">Hotel Name</label>
                      <input
                        type="text"
                        required
                        value={settingsForm.name}
                        onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-400">Timezone</label>
                      <select
                        value={settingsForm.timezone}
                        onChange={(e) => setSettingsForm({ ...settingsForm, timezone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                      >
                        <option value="UTC">UTC</option>
                        <option value="EST">EST</option>
                        <option value="PST">PST</option>
                        <option value="GMT">GMT</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400">Telegram Bot Token</label>
                    <input
                      type="password"
                      placeholder="YOUR_TELEGRAM_BOT_TOKEN"
                      value={settingsForm.telegramBotToken}
                      onChange={(e) => setSettingsForm({ ...settingsForm, telegramBotToken: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm font-mono"
                    />
                    <p className="text-[10px] text-zinc-500">Provide bot token generated by @BotFather on Telegram to start taking bookings.</p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400">Welcome Message (Telegram Bot)</label>
                    <textarea
                      rows={3}
                      value={settingsForm.welcomeMessage}
                      onChange={(e) => setSettingsForm({ ...settingsForm, welcomeMessage: e.target.value })}
                      placeholder="Welcome to our hotel! Find and book your ideal room in seconds."
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-400">Default Currency</label>
                      <select
                        value={settingsForm.currency}
                        onChange={(e) => setSettingsForm({ ...settingsForm, currency: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-400">Default Language</label>
                      <select
                        value={settingsForm.defaultLanguage}
                        onChange={(e) => setSettingsForm({ ...settingsForm, defaultLanguage: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="ru">Russian</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-400">Brand Primary Color</label>
                      <div className="flex gap-2 items-center">
                        <input
                          type="color"
                          value={settingsForm.brandColor}
                          onChange={(e) => setSettingsForm({ ...settingsForm, brandColor: e.target.value })}
                          className="w-10 h-9 p-0 border-0 bg-transparent rounded cursor-pointer"
                        />
                        <span className="text-xs font-mono text-zinc-400 uppercase">{settingsForm.brandColor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400">Staff Notification Email</label>
                    <input
                      type="email"
                      placeholder="frontdesk@hotel.com"
                      value={settingsForm.notificationEmail}
                      onChange={(e) => setSettingsForm({ ...settingsForm, notificationEmail: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-all shadow-md shadow-indigo-600/10 cursor-pointer"
                  >
                    Save Config
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* ── ROOM MODAL ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {roomModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-900/20">
                <h3 className="font-bold text-lg text-white">
                  {roomModalMode === 'create' ? 'Create Room Category' : 'Edit Room Category'}
                </h3>
                <button
                  onClick={() => setRoomModalOpen(false)}
                  className="p-1 text-zinc-500 hover:text-zinc-300 rounded cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleRoomSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-400">Category Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Deluxe Ocean Suite"
                    value={roomForm.name}
                    onChange={(e) => setRoomForm({ ...roomForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-400">Description</label>
                  <textarea
                    rows={3}
                    placeholder="Describe the room layout, views, and key features..."
                    value={roomForm.description}
                    onChange={(e) => setRoomForm({ ...roomForm, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white resize-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400">Price / Night ($)</label>
                    <input
                      type="number"
                      required
                      placeholder="150"
                      value={roomForm.pricePerNight}
                      onChange={(e) => setRoomForm({ ...roomForm, pricePerNight: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400">Max Guests</label>
                    <input
                      type="number"
                      required
                      placeholder="2"
                      value={roomForm.maxGuests}
                      onChange={(e) => setRoomForm({ ...roomForm, maxGuests: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400">Inventory Rooms</label>
                    <input
                      type="number"
                      required
                      placeholder="5"
                      value={roomForm.totalInventory}
                      onChange={(e) => setRoomForm({ ...roomForm, totalInventory: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-400">Amenities (Comma separated)</label>
                  <input
                    type="text"
                    placeholder="King Bed, Balcony, Sea View, Minibar"
                    value={roomForm.amenities}
                    onChange={(e) => setRoomForm({ ...roomForm, amenities: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-400">Image URLs (Comma separated)</label>
                  <input
                    type="text"
                    placeholder="https://images.unsplash.com/photo-1590490360182-c33d57733427"
                    value={roomForm.imageUrls}
                    onChange={(e) => setRoomForm({ ...roomForm, imageUrls: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm text-white"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-zinc-900">
                  <button
                    type="button"
                    onClick={() => setRoomModalOpen(false)}
                    className="py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800 rounded-lg text-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold cursor-pointer"
                  >
                    {roomModalMode === 'create' ? 'Create' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
