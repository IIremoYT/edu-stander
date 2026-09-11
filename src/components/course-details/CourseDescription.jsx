import React from 'react';

export default function CourseDescription() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-primary mb-6">عن الكورس</h2>
      <div className="prose prose-lg md:prose-xl text-muted-foreground font-arabic leading-relaxed max-w-none">
        <p className="mb-5">
          يقدم هذا الكورس شرحًا تفصيليًا ومبسطًا لمنهج اللغة الإنجليزية للصف الثالث الثانوي، مصممًا خصيصًا ليناسب كافة مستويات الطلاب. نركز في هذا الكورس على الفهم العميق للقواعد (Grammar) وحفظ الكلمات (Vocabulary) بطرق مبتكرة تضمن عدم نسيانها.
        </p>
        <p className="mb-5">
          يتميز الكورس بأسلوب مستر عبدالمعبود الفريد الذي يجمع بين الجدية في الشرح والتبسيط في توصيل المعلومة، مما يجعلك تستمتع بالمذاكرة وتحقق أعلى الدرجات.
        </p>
        <p>
          الكورس مقسم إلى وحدات منظمة، كل وحدة تحتوي على دروس فيديو، مذكرات PDF للمراجعة، واجبات رقمية لتقييم فهمك، وامتحانات شاملة تحاكي امتحانات آخر العام.
        </p>
      </div>
    </div>
  );
}
