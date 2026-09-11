import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background font-arabic text-foreground flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
            </div>

            <h1 className="text-3xl font-heading font-bold text-primary mb-3">
              حصل خطأ غير متوقع
            </h1>
            <p className="text-muted-foreground font-serif italic mb-2" dir="ltr">
              Something went wrong
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              حصل مشكلة أثناء عرض الصفحة. جرب تحدّث الصفحة أو ارجع للرئيسية.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-md w-full sm:w-auto justify-center cursor-pointer"
              >
                <RefreshCw size={18} />
                تحديث الصفحة
              </button>
              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-medium text-primary border border-border hover:bg-muted transition-colors w-full sm:w-auto justify-center cursor-pointer"
              >
                <Home size={18} />
                الصفحة الرئيسية
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
