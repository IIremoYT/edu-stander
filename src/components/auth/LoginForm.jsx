import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';

export default function LoginForm({ onFlip, isVisible }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, forgot
  const [forgotEmail, setForgotEmail] = useState('');

  // If not visible, we can hide the form fields to prevent tab focusing
  // However, backface-visibility handles rendering. We should just use tabIndex if needed,
  // but for simplicity we rely on visibility/display.

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'البريد الإلكتروني مطلوب';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'بريد إلكتروني غير صالح';
    
    if (!password) newErrors.password = 'كلمة المرور مطلوبة';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
      }, 1500);
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setErrors({ forgotEmail: 'البريد الإلكتروني مطلوب' });
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('forgot_success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">تم تسجيل الدخول بنجاح</h3>
        <p className="text-gray-500">جاري توجيهك...</p>
      </div>
    );
  }

  if (status === 'forgot') {
    return (
      <div className="animate-in fade-in duration-300">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary mb-2">استعادة كلمة المرور</h2>
          <p className="text-sm text-gray-500">دخل بريدك الإلكتروني وهنبعتلك رابط للاستعادة.</p>
        </div>
        <form onSubmit={handleForgotSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-primary mb-1.5">البريد الإلكتروني</label>
            <input
              type="email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              placeholder="example@email.com"
              className={`w-full py-3 px-4 rounded-lg border text-right focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${errors.forgotEmail ? 'border-red-500' : 'border-border focus:border-accent'}`}
            />
            {errors.forgotEmail && <p className="text-red-500 text-xs mt-1">{errors.forgotEmail}</p>}
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-accent text-white py-3.5 rounded-lg font-bold hover:bg-[#b07524] transition-colors flex justify-center items-center gap-2 mt-2"
          >
            {status === 'loading' ? <Loader2 size={20} className="animate-spin" /> : 'إرسال رابط الاستعادة'}
          </button>
          
          <button
            type="button"
            onClick={() => { setStatus('idle'); setErrors({}); }}
            className="w-full text-sm font-bold text-gray-500 hover:text-primary transition-colors py-2"
          >
            الرجوع لتسجيل الدخول
          </button>
        </form>
      </div>
    );
  }

  if (status === 'forgot_success') {
    return (
      <div className="text-center py-10 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">تم إرسال رابط استعادة كلمة المرور.</h3>
        <p className="text-sm text-gray-500 mb-6">راجع بريدك الإلكتروني للخطوات الجاية.</p>
        <button
          onClick={() => { setStatus('idle'); setForgotEmail(''); }}
          className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-[#b07524] transition-colors"
        >
          الرجوع لتسجيل الدخول
        </button>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">أهلاً بيك 👋</h2>
        <p className="text-gray-500">سجّل دخولك وكمل رحلتك في Stander Edu</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-primary mb-1.5">البريد الإلكتروني</label>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if(errors.email) setErrors({...errors, email: null}); }}
            placeholder="example@email.com"
            className={`w-full py-3 px-4 rounded-lg border text-right focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${errors.email ? 'border-red-500' : 'border-border focus:border-accent'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-1.5">كلمة المرور</label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => { setPassword(e.target.value); if(errors.password) setErrors({...errors, password: null}); }}
              placeholder="••••••••"
              dir="ltr"
              className={`w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-right ${errors.password ? 'border-red-500' : 'border-border focus:border-accent'}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              className="absolute left-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${rememberMe ? 'bg-accent border-accent' : 'border-gray-300 group-hover:border-accent'}`}>
              {rememberMe && <CheckCircle2 size={14} className="text-white" />}
            </div>
            <input 
              type="checkbox" 
              className="hidden" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <span className="text-sm font-medium text-gray-600 select-none">تذكرني</span>
          </label>

          <button
            type="button"
            onClick={() => setStatus('forgot')}
            className="text-sm font-bold text-accent hover:text-primary transition-colors"
          >
            نسيت كلمة المرور؟
          </button>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-accent text-white py-3.5 rounded-lg font-bold text-lg hover:bg-[#b07524] transition-all hover:shadow-md active:scale-[0.98] flex justify-center items-center gap-2 mt-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              جاري تسجيل الدخول...
            </>
          ) : (
            'تسجيل الدخول'
          )}
        </button>
      </form>

      <div className="mt-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-3 bg-white text-gray-400 font-medium">أو</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={onFlip}
          className="w-full py-3.5 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
        >
          إنشاء حساب جديد
        </button>
      </div>
    </div>
  );
}
