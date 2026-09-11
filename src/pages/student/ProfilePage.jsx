import React from 'react';
import StudentLayout from '../../components/student/StudentLayout';
import { mockStudentData } from '../../data/mockStudentData';
import { User, Shield, Globe, Monitor, Users, LogOut, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function ProfilePage() {
  const { profile } = mockStudentData;

  return (
    <StudentLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">الملف الشخصي</h1>
          <p className="text-muted-foreground text-lg">إدارة بيانات حسابك وإعدادات المنصة</p>
        </div>

        {/* Premium Profile Header */}
        <div className="bg-gradient-to-br from-[#0F1B2D] to-primary rounded-3xl p-6 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/10 object-cover shadow-2xl"
            />
            <div className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-[#0F1B2D]"></div>
          </div>
          
          <div className="text-center sm:text-right relative z-10 flex-1 pt-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{profile.name}</h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
                {profile.role}
              </span>
              <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
                {profile.grade}
              </span>
              <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 font-mono" dir="ltr">
                ID: {profile.id}
              </span>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Personal Info */}
          <div className="bg-white rounded-3xl p-6 border border-border shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">البيانات الشخصية</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">الاسم بالكامل</p>
                <p className="font-bold text-primary">{profile.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">رقم الهاتف</p>
                <p className="font-bold text-primary" dir="ltr">{profile.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">البريد الإلكتروني</p>
                <p className="font-bold text-primary" dir="ltr">{profile.email}</p>
              </div>
            </div>

            <button className="w-full py-2.5 mt-2 bg-gray-50 hover:bg-gray-100 text-primary font-bold rounded-xl transition-colors text-sm border border-border">
              تعديل البيانات
            </button>
          </div>

          <div className="space-y-6">
            {/* Security */}
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-primary">الأمان</h3>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary">كلمة المرور</p>
                  <p className="text-sm text-muted-foreground mt-1">آخر تغيير منذ 3 أشهر</p>
                </div>
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-primary font-bold rounded-xl transition-colors text-sm border border-border">
                  تغيير
                </button>
              </div>
            </div>

            {/* App Settings */}
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-primary">تفضيلات التطبيق</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                    <span className="font-bold text-primary">لغة التطبيق</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="text-sm font-medium">{profile.appLanguage}</span>
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                    <span className="font-bold text-primary">المظهر</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="text-sm font-medium">{profile.theme}</span>
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Family Connection */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">الحساب العائلي</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">ولي الأمر المرتبط:</span>
                  <span className="font-bold text-primary">{profile.parent.name}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>مرتبط بنجاح</span>
              </div>
              <p className="text-[10px] text-muted-foreground font-medium">تعديل علاقة ولي الأمر يتم من خلال الإدارة.</p>
            </div>
          </div>

        </div>

        {/* Logout Section */}
        <div className="pt-4 flex justify-center md:justify-end">
          <button className="flex items-center gap-2 px-6 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 font-bold rounded-xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>

      </div>
    </StudentLayout>
  );
}
