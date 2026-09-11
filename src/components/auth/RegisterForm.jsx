import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';

export default function RegisterForm({ onFlip, isVisible }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'الاسم مطلوب';
    
    if (!formData.email) newErrors.email = 'البريد الإلكتروني مطلوب';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'بريد إلكتروني غير صالح';
    
    if (!formData.phone) newErrors.phone = 'رقم الموبايل مطلوب';
    else if (!/^[0-9]{10,14}$/.test(formData.phone)) newErrors.phone = 'رقم موبايل غير صالح';
    
    if (!formData.password) newErrors.password = 'كلمة المرور مطلوبة';
    else if (formData.password.length < 6) newErrors.password = 'يجب أن تكون 6 أحرف على الأقل';
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
      }, 2000);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">تم إنشاء الحساب بنجاح</h3>
        <p className="text-gray-500 mb-8">مرحباً بك في Stander Edu!</p>
        <button
          onClick={onFlip}
          className="w-full bg-accent text-white py-3.5 rounded-lg font-bold hover:bg-[#b07524] transition-colors"
        >
          المتابعة لتسجيل الدخول
        </button>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="mb-6">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">أهلاً بيك 👋</h2>
        <p className="text-gray-500 text-sm">اعمل حسابك وابدأ رحلتك في Stander Edu</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-primary mb-1">الاسم</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="الاسم الثلاثي"
            className={`w-full py-2.5 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${errors.name ? 'border-red-500' : 'border-border focus:border-accent'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-bold text-primary mb-1">رقم الموبايل</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="01xxxxxxxxx"
              dir="ltr"
              className={`w-full py-2.5 px-4 rounded-lg border text-right focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${errors.phone ? 'border-red-500' : 'border-border focus:border-accent'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-primary mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              dir="ltr"
              className={`w-full py-2.5 px-4 rounded-lg border text-right focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${errors.email ? 'border-red-500' : 'border-border focus:border-accent'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-1">كلمة المرور</label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              dir="ltr"
              className={`w-full py-2.5 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-right ${errors.password ? 'border-red-500' : 'border-border focus:border-accent'}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              className="absolute left-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-1">تأكيد كلمة المرور</label>
          <div className="relative flex items-center">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              dir="ltr"
              className={`w-full py-2.5 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-right ${errors.confirmPassword ? 'border-red-500' : 'border-border focus:border-accent'}`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              className="absolute left-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 font-medium">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-accent text-white py-3.5 rounded-lg font-bold text-lg hover:bg-[#b07524] transition-all hover:shadow-md active:scale-[0.98] flex justify-center items-center gap-2 mt-4"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              جاري إنشاء الحساب...
            </>
          ) : (
            'إنشاء الحساب'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-3">عندك حساب بالفعل؟</p>
        <button
          type="button"
          onClick={onFlip}
          className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}
