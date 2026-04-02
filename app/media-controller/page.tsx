"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Trash2,
    Save,
    RefreshCcw,
    Layout,
    Video,
    Monitor,
    ChevronRight,
    Database,
    CheckCircle2,
    AlertCircle,
    Globe,
    Settings2,
    Layers,
    ExternalLink,
    Lock
} from 'lucide-react';

interface WebsiteData {
    banner: string[];
    shortVideos: (string | string[])[];
    "360Videos": string;
}

interface VideoData {
    [key: string]: WebsiteData;
}

const CATEGORIES = [
    { id: 'banner', title: 'Banner Videos', icon: <Monitor className="w-5 h-5" />, color: 'blue' },
    { id: 'shortVideos', title: 'Short Content', icon: <Video className="w-5 h-5" />, color: 'indigo' },
    { id: '360Videos', title: '360° Experience', icon: <Layout className="w-5 h-5" />, color: 'emerald' },
];

export default function AdminPage() {
    const [data, setData] = useState<VideoData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeWebsite, setActiveWebsite] = useState<string>('');
    const [activeCategory, setActiveCategory] = useState('banner');
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    
    // Auth State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    useEffect(() => {
        const logged = localStorage.getItem('isLoggedIn');
        if (logged === 'true') {
            setIsLoggedIn(true);
            fetchData();
        }
        setAuthLoading(false);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        setAuthLoading(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: usernameInput, password: passwordInput }),
            });

            if (response.ok) {
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
                fetchData();
            } else {
                const err = await response.json();
                setLoginError(err.error || 'Invalid credentials');
            }
        } catch (error) {
            setLoginError('Failed to connect to the server');
        } finally {
            setAuthLoading(false);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/videos');
            const result = await response.json();
            setData(result);
            const keys = Object.keys(result);
            if (keys.length > 0) {
                setActiveWebsite(keys[0]);
            }
        } catch (error) {
            showToast('Error loading data', 'error');
        } finally {
            setLoading(false);
        }
    };

    const saveData = async () => {
        setSaving(true);
        try {
            const response = await fetch('/api/videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                showToast('Changes saved successfully!', 'success');
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            showToast('Error saving changes', 'error');
        } finally {
            setSaving(false);
        }
    };

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const updateBanner = (index: number, val: string) => {
        if (!data || !activeWebsite) return;
        const newData = { ...data };
        const newBanner = [...newData[activeWebsite].banner];
        newBanner[index] = val;
        newData[activeWebsite] = { ...newData[activeWebsite], banner: newBanner };
        setData(newData);
    };

    const addBanner = () => {
        if (!data || !activeWebsite) return;
        const newData = { ...data };
        const newBanner = [...newData[activeWebsite].banner, ""];
        newData[activeWebsite] = { ...newData[activeWebsite], banner: newBanner };
        setData(newData);
    };

    const removeBanner = (index: number) => {
        if (!data || !activeWebsite) return;
        const newData = { ...data };
        const newBanner = newData[activeWebsite].banner.filter((_, i) => i !== index);
        newData[activeWebsite] = { ...newData[activeWebsite], banner: newBanner };
        setData(newData);
    };

    const update360 = (val: string) => {
        if (!data || !activeWebsite) return;
        const newData = { ...data };
        newData[activeWebsite] = { ...newData[activeWebsite], "360Videos": val };
        setData(newData);
    };

    const updateShortVideo = (index: number, val: string | string[]) => {
        if (!data || !activeWebsite) return;
        const newData = { ...data };
        const newShort = [...newData[activeWebsite].shortVideos];
        newShort[index] = val;
        newData[activeWebsite] = { ...newData[activeWebsite], shortVideos: newShort };
        setData(newData);
    };

    const addShortVideo = () => {
        if (!data || !activeWebsite) return;
        const newData = { ...data };
        const newShort = [...newData[activeWebsite].shortVideos, ""];
        newData[activeWebsite] = { ...newData[activeWebsite], shortVideos: newShort };
        setData(newData);
    };

    const removeShortVideo = (index: number) => {
        if (!data || !activeWebsite) return;
        const newData = { ...data };
        const newShort = newData[activeWebsite].shortVideos.filter((_, i) => i !== index);
        newData[activeWebsite] = { ...newData[activeWebsite], shortVideos: newShort };
        setData(newData);
    };

    const addSubVideo = (index: number) => {
        if (!data || !activeWebsite) return;
        const item = data[activeWebsite].shortVideos[index];
        let newVal;
        if (Array.isArray(item)) {
            newVal = [...item, ""];
        } else {
            newVal = [item, ""];
        }
        updateShortVideo(index, newVal);
    };

    const updateSubVideo = (parentIndex: number, subIndex: number, val: string) => {
        if (!data || !activeWebsite) return;
        const item = data[activeWebsite].shortVideos[parentIndex];
        if (Array.isArray(item)) {
            const newVal = [...item];
            newVal[subIndex] = val;
            updateShortVideo(parentIndex, newVal);
        }
    };

    const removeSubVideo = (parentIndex: number, subIndex: number) => {
        if (!data || !activeWebsite) return;
        const item = data[activeWebsite].shortVideos[parentIndex];
        if (Array.isArray(item)) {
            const newVal = item.filter((_, i) => i !== subIndex);
            if (newVal.length === 1) {
                updateShortVideo(parentIndex, newVal[0]);
            } else {
                updateShortVideo(parentIndex, newVal);
            }
        }
    };

    const currentWebsiteData = data && activeWebsite ? data[activeWebsite] : null;

    if (authLoading && !isLoggedIn) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="p-4 rounded-full border-t-4 border-blue-500 border-r-4 border-r-transparent"
                >
                    <RefreshCcw className="w-10 h-10 text-blue-500" />
                </motion.div>
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white/3 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px] shadow-2xl space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-br-[120px] pointer-events-none" />
                        
                        <div className="text-center space-y-3 relative">
                            <div className="inline-flex p-4 rounded-3xl bg-blue-500 shadow-xl shadow-blue-500/20 mb-4">
                                <Lock className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-4xl font-black text-white tracking-tighter">Panel Access</h1>
                            <p className="text-slate-400 font-medium">Verify credentials to manage system assets.</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Username</label>
                                    <input 
                                        type="text"
                                        value={usernameInput}
                                        onChange={(e) => setUsernameInput(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:bg-white/8 focus:border-blue-500/50 outline-none transition-all"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Security Key</label>
                                    <input 
                                        type="password"
                                        value={passwordInput}
                                        onChange={(e) => setPasswordInput(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:bg-white/8 focus:border-blue-500/50 outline-none transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {loginError && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm font-bold"
                                >
                                    <AlertCircle className="w-4 h-4 flex-none" />
                                    <span>{loginError}</span>
                                </motion.div>
                            )}

                            <button 
                                type="submit"
                                disabled={authLoading}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-3xl font-black transition-all shadow-xl shadow-blue-500/10 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                            >
                                {authLoading ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <>Access System <ChevronRight className="w-5 h-5" /></>}
                            </button>
                        </form>

                        <div className="pt-4 text-center">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Secured by Internal Protocols</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="h-screen bg-[#f8fafc] text-[#1e293b] font-sans antialiased overflow-hidden">
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 24, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.95 }}
                        className={`fixed top-0 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border ${toast.type === 'success' ? 'bg-white border-emerald-100 text-emerald-600' : 'bg-white border-red-100 text-red-600'
                            }`}
                    >
                        <div className={`p-2 rounded-full ${toast.type === 'success' ? 'bg-emerald-50' : 'bg-red-50'}`}>
                            {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                        </div>
                        <span className="font-semibold tracking-tight">{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] h-full">

                <aside className="bg-white border-r border-slate-200/80 h-full flex flex-col z-20 shadow-[10px_0_30px_rgba(0,0,0,0.01)]">
                    <div className="p-8 border-b border-slate-50">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-[18px] shadow-lg shadow-blue-500/20">
                                <Settings2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-black tracking-tight text-slate-900 leading-tight">Admin Pannel</h1>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.05em]">System Live</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-8 space-y-10 custom-scrollbar">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">Active Entity</label>
                                <Globe className="w-3 h-3 text-slate-300" />
                            </div>
                            <div className="relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <Layers className="w-4 h-4" />
                                </div>
                                <select
                                    value={activeWebsite}
                                    onChange={(e) => setActiveWebsite(e.target.value)}
                                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-10 py-4 font-bold text-slate-700 outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/40 focus:bg-white transition-all cursor-pointer shadow-sm hover:border-slate-300"
                                >
                                    {data && Object.keys(data).map((site) => (
                                        <option key={site} value={site}>{site.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}</option>
                                    ))}
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">Content Sections</label>
                            </div>
                            <nav className="space-y-2">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`w-full flex items-center justify-between group px-5 py-4 rounded-2xl transition-all duration-300 ${activeCategory === cat.id
                                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25'
                                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`transition-colors ${activeCategory === cat.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                                {cat.icon}
                                            </div>
                                            <span className="font-bold text-[15px]">{cat.title}</span>
                                        </div>
                                        <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === cat.id ? 'rotate-90 opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0'}`} />
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className="p-8 border-t border-slate-50 bg-slate-50/30 space-y-4">
                        <button
                            onClick={saveData}
                            disabled={saving}
                            className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-[22px] font-black transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {saving ? (
                                <RefreshCcw className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="tracking-tight">Push Changes</span>
                                </>
                            )}
                        </button>

                        <button
                            onClick={handleLogout}
                            className="w-full bg-white border border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 py-4 rounded-[22px] font-bold text-sm transition-all flex items-center justify-center gap-2"
                        >
                            <Lock className="w-4 h-4" />
                            <span>System Lock</span>
                        </button>
                    </div>
                </aside>

                <main className="h-full overflow-y-auto px-8 lg:px-16 py-12 bg-white/40 backdrop-blur-3xl custom-scrollbar shadow-inner">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeWebsite}-${activeCategory}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="max-w-[1000px] mx-auto space-y-12"
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4 border-b border-slate-100">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1.5 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-wider shadow-lg shadow-blue-500/20">Editor</span>
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-xl">
                                            <Globe className="w-3.5 h-3.5 text-slate-400" />
                                            <span className="text-slate-800 text-[11px] font-black tracking-tight">{activeWebsite.toUpperCase()}</span>
                                        </div>
                                        { (activeCategory === 'shortVideos' || activeCategory === '360Videos') && (
                                             <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-xl">
                                                <Lock className="w-3.5 h-3.5 text-amber-500" />
                                                <span className="text-amber-700 text-[10px] font-black tracking-tight uppercase">Structure Locked</span>
                                            </div>
                                        )}
                                    </div>
                                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                        {CATEGORIES.find(c => c.id === activeCategory)?.title}
                                    </h2>
                                </div>
                                <div className="md:w-1/3 text-right">
                                    <p className="text-slate-500 font-medium leading-relaxed text-[14px]">
                                        {activeCategory === 'banner' 
                                            ? "Full management mode: Edit, add, or delete banner sequences."
                                            : "Restricted mode: Structural changes locked. Only asset URLs can be updated."}
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                {activeCategory === 'banner' && currentWebsiteData && (
                                    <div className="space-y-6">
                                        {currentWebsiteData.banner.map((url, idx) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                key={idx}
                                                className="group bg-white border border-slate-200/60 p-6 rounded-[32px] focus-within:ring-4 focus-within:ring-blue-500/5 focus-within:border-blue-500/20 transition-all shadow-sm hover:shadow-xl hover:shadow-slate-200/40"
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className="flex-none w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-slate-300 text-lg group-hover:bg-blue-50 group-hover:text-blue-200 transition-colors">
                                                        {idx + 1}
                                                    </div>
                                                    <div className="flex-1 space-y-1">
                                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Video Resource Link</label>
                                                        <input
                                                            type="text"
                                                            value={url}
                                                            onChange={(e) => updateBanner(idx, e.target.value)}
                                                            placeholder="https://cdn.example.com/video.mp4"
                                                            className="w-full bg-transparent border-none focus:ring-0 text-[16px] font-bold text-slate-700 py-1"
                                                        />
                                                    </div>
                                                    <button
                                                        onClick={() => removeBanner(idx)}
                                                        className="opacity-0 group-hover:opacity-100 p-4 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-[20px] transition-all"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                        <button
                                            onClick={addBanner}
                                            className="w-full py-8 border-2 border-dashed border-slate-200 rounded-[36px] text-slate-400 hover:text-blue-600 hover:border-blue-400/40 hover:bg-blue-50/20 transition-all flex items-center justify-center gap-4 group font-black uppercase tracking-widest text-[13px]"
                                        >
                                            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                                            <span>Append New Clip</span>
                                        </button>
                                    </div>
                                )}

                                {activeCategory === 'shortVideos' && currentWebsiteData && (
                                    <div className="space-y-10">
                                        {currentWebsiteData.shortVideos.map((item, idx) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                key={idx}
                                                className="bg-white border border-slate-200/80 p-10 rounded-[48px] shadow-sm relative overflow-hidden group"
                                            >
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-bl-[120px] flex items-start justify-end p-8 pointer-events-none group-hover:bg-indigo-50/50 transition-colors">
                                                    <Video className="w-6 h-6 text-indigo-400" />
                                                </div>

                                                <div className="flex items-center justify-between mb-10">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-14 h-14 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl font-black text-2xl shadow-sm">
                                                            {idx + 1}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-black text-slate-900 text-2xl tracking-tighter">Content Sequence</h3>
                                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Direct Asset Mapping</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {Array.isArray(item) ? (
                                                    <div className="space-y-5 pl-8 border-l-[6px] border-indigo-50">
                                                        {item.map((subUrl, sIdx) => (
                                                            <div key={sIdx} className="flex items-center gap-5 group/sub">
                                                                <div className="flex-1 space-y-1.5">
                                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Variation {sIdx + 1}</label>
                                                                    <input
                                                                        type="text"
                                                                        value={subUrl}
                                                                        onChange={(e) => updateSubVideo(idx, sIdx, e.target.value)}
                                                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-[15px] font-bold text-slate-700 focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all shadow-sm"
                                                                        placeholder="https://..."
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Primary Asset URL</label>
                                                        <div className="flex items-center gap-4">
                                                            <input
                                                                type="text"
                                                                value={item}
                                                                onChange={(e) => updateShortVideo(idx, e.target.value)}
                                                                className="w-full bg-slate-50 border border-slate-100 rounded-3xl px-8 py-5 text-[17px] font-bold text-slate-700 focus:bg-white focus:ring-8 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all shadow-sm"
                                                                placeholder="Paste direct video URL..."
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {activeCategory === '360Videos' && currentWebsiteData && (
                                    <div className="bg-white border border-slate-200/60 p-12 lg:p-16 rounded-[64px] shadow-sm space-y-12">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                                            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-[32px] shadow-sm">
                                                <Layout className="w-10 h-10" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Immersive Layer</h3>
                                                <p className="text-slate-500 font-medium text-lg mt-1 italic opacity-80">Configuring the global panoramic background.</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2">Panoramics Resource Path</label>
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    value={currentWebsiteData["360Videos"]}
                                                    onChange={(e) => update360(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-[32px] px-10 py-7 text-[20px] font-black text-slate-800 focus:bg-white focus:ring-[20px] focus:ring-emerald-500/5 focus:border-emerald-500 transition-all shadow-lg shadow-slate-100"
                                                    placeholder="Input URL..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 20px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </div>
    );
}