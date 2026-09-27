'use client';

import { useState } from 'react';

const posts = [
  {
    type: 'عاجل',
    title: 'متابعة التطورات في اليمن أولاً بأول',
    body: 'هذه الواجهة مهيأة للربط بمصادر الأخبار والتحقق من المعلومات قبل نشرها.',
    time: 'منذ 3 دقائق',
    source: 'الحسامي نيوز'
  },
  {
    type: 'سياسة',
    title: 'خبر جديد قيد التحقق',
    body: 'يعرض النظام حالة التحقق والمصادر المستخدمة بوضوح، مع الفصل بين الخبر المؤكد والمعلومة غير المكتملة.',
    time: 'منذ 12 دقيقة',
    source: 'مصادر متعددة'
  }
];

const tabs = ['الرئيسية', 'عاجل', 'اليمن', 'فيديو', 'صور', 'الأكثر تداولاً', 'خريطة الأحداث'];

export default function Home() {
  const [tab, setTab] = useState('الرئيسية');
  const [liked, setLiked] = useState(null);

  return (
    <main>
      <header className="top">
        <div className="brand">
          <div className="logo">ح</div>
          <div><b>الحسامي نيوز</b><small>منصة عبدالله الحسامي</small></div>
        </div>
        <div className="search"><span>⌕</span><input aria-label="البحث" placeholder="ابحث في الأخبار والحسابات..." /></div>
        <button className="icon" aria-label="الإشعارات">🔔</button>
        <button className="login">تسجيل الدخول</button>
      </header>

      <section className="hero">
        <div>
          <span className="pill">✦ مدعوم بالذكاء الاصطناعي</span>
          <h1>أخبار اليمن<br /><span>لحظة بلحظة</span></h1>
          <p>منصة إخبارية واجتماعية تجمع الأخبار والصور والفيديوهات والتفاعل في مكان واحد، مع طبقة تحقق ذكية للمصادر والمحتوى.</p>
          <div className="actions">
            <button className="primary">إنشاء حساب</button>
            <button className="secondary">▶ شاهد آخر الأخبار</button>
          </div>
        </div>
        <div className="heroCard">
          <div className="live"><i /> مباشر الآن</div>
          <h3>عبدالله الحسامي <span>✓</span></h3>
          <p>الحساب الرسمي</p>
          <div className="stats"><span><b>0</b> خبر منشور</span><span><b>0</b> متابع</span><span><b>✓</b> موثّق</span></div>
          <button className="follow">＋ متابعة الحساب الرسمي</button>
          <small>متابعة الحساب الرسمي مطلوبة للانضمام للمنصة.</small>
        </div>
      </section>

      <nav className="tabs" aria-label="أقسام الأخبار">
        {tabs.map((item) => <button className={tab === item ? 'active' : ''} onClick={() => setTab(item)} key={item}>{item}</button>)}
      </nav>

      <div className="layout">
        <section>
          <div className="sectionHead"><h2>آخر الأخبار</h2><span>● تحديث تلقائي</span></div>
          {posts.map((post, index) => (
            <article className="post" key={post.title}>
              <div className="postTop"><span className="tag">{post.type}</span><span>{post.time}</span></div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="verify"><b>✓ حالة التحقق:</b> قيد التحقق <span>المصدر: {post.source}</span></div>
              <div className="postActions">
                <button onClick={() => setLiked(liked === index ? null : index)} className={liked === index ? 'liked' : ''}>♥ إعجاب</button>
                <button>💬 تعليق</button><button>↻ إعادة نشر</button><button>↗ مشاركة</button>
              </div>
            </article>
          ))}
        </section>

        <aside>
          <div className="sideCard"><h3>الذكاء الاصطناعي</h3><p>يعمل النظام على فرز الأخبار ومقارنة المصادر وتجهيز المسودات للمراجعة.</p><div className="aiRow"><span className="dot" /> النظام جاهز</div></div>
          <div className="sideCard"><h3>انشر الآن</h3><div className="compose"><div className="avatar">ع</div><span>ماذا يحدث في اليمن؟</span></div><div className="composeBtns"><button>▧ صورة</button><button>▣ فيديو</button><button>◉ حالة</button></div></div>
          <div className="sideCard"><h3>حماية المجتمع</h3><p>فحص للمحتوى المخالف ونظام مخالفات وتصعيد يصل إلى إيقاف الحساب بعد خمس مخالفات مؤكدة.</p></div>
        </aside>
      </div>

      <footer><b>الحسامي نيوز</b><span>© 2026 عبدالله الحسامي — منصة إخبارية اجتماعية</span><span>سياسة الاستخدام · الخصوصية · الإبلاغ عن محتوى</span></footer>
    </main>
  );
}
