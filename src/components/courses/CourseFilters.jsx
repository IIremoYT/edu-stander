import React, { useState } from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { filterOptions } from '../../data/coursesData';

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group py-1">
      <div className={`w-[18px] h-[18px] rounded flex-shrink-0 border-2 flex items-center justify-center transition-all duration-200 ${
        checked 
          ? 'bg-accent border-accent' 
          : 'border-border group-hover:border-accent/50'
      }`}>
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span className={`text-sm transition-colors ${checked ? 'text-primary font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
        {label}
      </span>
    </label>
  );
}

function PriceSlider({ min, max, value, onChange }) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <input
        type="range"
        min={min}
        max={max}
        step={50}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-slider"
        style={{
          background: `linear-gradient(to left, var(--color-accent) ${100 - percentage}%, var(--color-border) ${100 - percentage}%)`
        }}
        id="price-slider"
      />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{min} ج.م</span>
        <span className="font-medium text-primary text-sm">{value} ج.م</span>
        <span>{max} ج.م</span>
      </div>
    </div>
  );
}

export default function CourseFilters({ isOpen, onClose, isMobile = false }) {
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);

  const toggleFilter = (list, setList, value) => {
    setList(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value) 
        : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSelectedGrades([]);
    setSelectedTypes([]);
    setSelectedLevels([]);
    setMaxPrice(1000);
  };

  const hasActiveFilters = selectedGrades.length > 0 || selectedTypes.length > 0 || selectedLevels.length > 0 || maxPrice < 1000;

  const filterContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-primary text-lg flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-accent" />
          تصفية النتائج
        </h3>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs text-accent hover:text-[#b07524] transition-colors flex items-center gap-1 font-medium"
          >
            <RotateCcw size={12} />
            إعادة تعيين
          </button>
        )}
      </div>

      {/* الصف الدراسي */}
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary mb-3">الصف الدراسي</h4>
        <div className="space-y-1">
          {filterOptions.grades.map((grade) => (
            <FilterCheckbox
              key={grade}
              label={grade}
              checked={selectedGrades.includes(grade)}
              onChange={() => toggleFilter(selectedGrades, setSelectedGrades, grade)}
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-border"></div>

      {/* نوع الكورس */}
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary mb-3">نوع الكورس</h4>
        <div className="space-y-1">
          {filterOptions.types.map((type) => (
            <FilterCheckbox
              key={type}
              label={type}
              checked={selectedTypes.includes(type)}
              onChange={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-border"></div>

      {/* مستوى الصعوبة */}
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary mb-3">مستوى الصعوبة</h4>
        <div className="space-y-1">
          {filterOptions.levels.map((level) => (
            <FilterCheckbox
              key={level}
              label={level}
              checked={selectedLevels.includes(level)}
              onChange={() => toggleFilter(selectedLevels, setSelectedLevels, level)}
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-border"></div>

      {/* السعر */}
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary mb-4">السعر</h4>
        <PriceSlider min={0} max={1000} value={maxPrice} onChange={setMaxPrice} />
      </div>

      {/* Reset button (full) */}
      {hasActiveFilters && (
        <>
          <div className="h-px bg-border"></div>
          <button
            onClick={resetFilters}
            className="w-full py-2.5 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <RotateCcw size={14} />
            إعادة تعيين الفلاتر
          </button>
        </>
      )}
    </div>
  );

  // Mobile Drawer
  if (isMobile) {
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}

        {/* Drawer */}
        <div
          className={`fixed inset-y-0 right-0 w-[320px] max-w-[85vw] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="font-heading font-bold text-primary text-lg">الفلاتر</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="إغلاق الفلاتر"
            >
              ✕
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-[calc(100vh-65px)]">
            {filterContent}
          </div>
        </div>
      </>
    );
  }

  // Desktop Sidebar
  return (
    <aside className="hidden lg:block w-[280px] flex-shrink-0">
      <div className="bg-card border border-border rounded-2xl p-6 sticky top-28 shadow-sm">
        {filterContent}
      </div>
    </aside>
  );
}
