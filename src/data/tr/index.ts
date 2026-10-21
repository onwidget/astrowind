/*
 * Turkish copy. It began as a transcription of EFKA_Web_Sitesi_Metinleri_Guncel.docx
 * and was rewritten on 2026-10-21, at the site owner's request, so it reads as
 * natural Turkish rather than a translation. The facts are the document's.
 *
 * Turkish is the default locale, and this object is the shape the English
 * dictionary must match: `src/data/en/index.ts` is typed `typeof tr`, so a
 * missing or misspelled key there is a build error rather than a blank section.
 *
 * Wording lives here; layout lives in `src/components/pages/`. Nothing in this
 * file is invented. Where the document supplies no copy for a section, the
 * section does not exist.
 */

import { localePath } from '~/i18n/routes';

const p = (key: Parameters<typeof localePath>[0]) => localePath(key, 'tr');

export const tr = {
  /** Short description of the company, from the document's cover table. */
  company: `Filipinli bakıcı ya da personel arayan ailelere ve işletmelere, adayı bulmaktan
    Türkiye’de yasal olarak işe başlamasına kadar tek elden destek veren danışmanlık firması.`,

  nav: {
    links: [
      {
        text: 'Hizmetlerimiz',
        href: p('services'),
        links: [
          { text: 'Ev ve Bakım Personeli', href: `${p('services')}#aileniz-icin` },
          { text: 'Kurumsal İş Gücü Çözümleri', href: `${p('services')}#kurumsal-cozumler` },
        ],
      },
      { text: 'Sürecimiz', href: p('process') },
      { text: 'Hakkımızda', href: p('about') },
      { text: 'SSS', href: p('faq') },
    ],
    actions: [{ variant: 'primary' as const, text: 'Bize Ulaşın', href: p('contact') }],
  },

  footer: {
    description: `EFKA Consulting, evine bakıcı ya da işletmesine personel arayanlara
      Filipinler’den uygun adayları buluyor; çalışma izninden işe başlangıca kadar bütün süreci
      takip ediyor.`,
    columns: [
      {
        title: 'Hizmetlerimiz',
        links: [
          { text: 'Uluslararası İş Gücü', href: p('services') },
          { text: 'Ev ve Bakım Personeli', href: `${p('services')}#aileniz-icin` },
          { text: 'Kurumsal İş Gücü Çözümleri', href: `${p('services')}#kurumsal-cozumler` },
          { text: 'Neden Filipinli Bakıcı?', href: p('whyFilipino') },
        ],
      },
      {
        title: 'Kurumsal',
        links: [
          { text: 'Hakkımızda', href: p('about') },
          { text: 'Sürecimiz', href: p('process') },
          { text: 'Sık Sorulan Sorular', href: p('faq') },
          { text: 'İletişim', href: p('contact') },
        ],
      },
    ],
    // The KVKK notice exists only in Turkish, so both locales link to the
    // one page at /kvkk.
    secondaryLinks: [{ text: 'KVKK Aydınlatma Metni', href: '/kvkk' }] as Array<{ text: string; href: string }>,
    socialLabels: { instagram: 'Instagram', linkedin: 'LinkedIn', email: 'E-posta' },
    footNote: 'consulting · Tüm hakları saklıdır.',
  },

  home: {
    meta: {
      title: 'efka consulting — Filipinli Bakıcı ve Personel Danışmanlığı',
      description: `Evinize Filipinli bakıcı ya da işletmenize personel mi arıyorsunuz? Uygun
        adayı buluyor, çalışma izninden işe başlangıca kadar bütün süreci sizin yerinize takip
        ediyoruz.`,
    },
    hero: {
      tagline: 'Filipinli Bakıcı ve Personel Danışmanlığı',
      title: 'Doğru kişiyi birlikte bulalım,<br />gerisini bize bırakın.',
      subtitle: `Evinize bakıcı ya da işletmenize personel mi arıyorsunuz? İhtiyacınıza uygun
        Filipinli adayları buluyor, sizinle tanıştırıyoruz. Çalışma izninden işe başladıkları güne
        kadar bütün işlemleri de biz takip ediyoruz.`,
      // No contact button here: the header's own button already leads there.
      actions: [
        { variant: 'primary' as const, text: 'Süreç Nasıl İşliyor?', href: p('process') },
        { text: 'Neden Filipinli Bakıcı?', href: p('whyFilipino') },
      ],
    },
    pillars: [
      {
        title: 'İhtiyacınıza göre aday',
        description: `Adaylara yalnızca öz geçmişlerinden bakmıyoruz; deneyimlerini,
          beklentilerini ve sizin çalışma düzeninize uyup uymayacaklarını da tartıyoruz.`,
        icon: 'tabler:users-group',
      },
      {
        title: 'Adım adım takip',
        description: `Aday seçiminden resmî işlemlere, Türkiye’ye geliş planına kadar her adımı
          biz takip ediyoruz.`,
        icon: 'tabler:list-check',
      },
      {
        title: 'Tek muhatap',
        description: `Süreç boyunca yalnızca bizimle görüşürsünüz. Diğer taraflarla bütün
          yazışmaları ve koordinasyonu sizin adınıza biz yürütürüz.`,
        icon: 'tabler:messages',
      },
    ],
    solutions: {
      title: 'Evinize de işletmenize de uygun çalışan',
      subtitle: `Çocuk, yaşlı ya da hasta bakımı için evinize; turizm, konaklama ya da üretim
        alanında işletmenize uygun çalışanı birlikte belirliyor, süreci baştan planlıyoruz.`,
      readMore: 'Hizmetlerimize göz atın',
    },
    whyEfka: {
      title: 'Neden EFKA?',
      items: [
        {
          title: 'Her ihtiyaca ayrı bakıyoruz',
          description: `Hiçbir aileyi ya da işletmeyi bir diğerine benzetmiyoruz. Aradığınız
            kişinin profilini, yapacağı işe ve sizin beklentilerinize göre birlikte çıkarıyoruz.`,
        },
        {
          title: 'Her şey tek elden',
          description: `Aday aramaktan görüşmelere, evrak hazırlığından Türkiye’ye geliş planına
            kadar bütün işleri tek elden yürütüyoruz.`,
        },
        {
          title: 'Hukuk geçmişinden gelen titizlik',
          description: `Kurucumuz altı yıl hukuk müşaviri olarak çalıştı. Evrakta, sözleşmede ve
            takipte titiz olmamız o yıllardan geliyor.`,
        },
        {
          title: 'Uzun soluklu bir ilişki',
          description: `Birini hızlıca yerleştirip geçmek istemiyoruz. Bizim için önemli olan,
            beklentilerin baştan açıkça konuşulduğu ve yıllarca sürebilecek bir çalışma
            ilişkisi.`,
        },
      ],
    },
  },

  services: {
    meta: {
      title: 'Hizmetlerimiz',
      description: `Ailelere bebek, çocuk, yaşlı ve hasta bakımı için; işletmelere turizm,
        konaklama, üretim ve sanayi alanlarında Filipinli çalışan buluyoruz.`,
    },
    hero: {
      tagline: 'Hizmetlerimiz',
      title: 'Uluslararası İş Gücü',
      paragraphs: [
        `Türkiye’nin her yerindeki ailelere ve işletmelere Filipinler’den çalışan buluyoruz.
          Adayı bulmaktan Türkiye’de yasal olarak işe başlamasına kadar bütün süreçle biz
          ilgileniyoruz.`,
        `Filipinler’de yetkili iş ortaklarımızla birlikte çalışıyoruz. Aday seçiminden çalışma
          iznine kadar her adımda ne yaptığımızı size açıkça anlatıyor, her işi mevzuata uygun
          yürütüyoruz.`,
      ],
    },
    family: {
      id: 'aileniz-icin',
      title: 'Ev ve Bakım Personeli',
      paragraphs: [
        `Evinize girecek kişinin işini bilmesi yetmez; aile düzeninize ayak uydurabilmesi ve
          beklentilerinizi karşılayabilmesi de gerekir.`,
        `Bebek ve çocuk bakımı, yaşlı refakati ya da hasta veya engelli bir yakınınızın günlük
          bakımı için uygun Filipinli adayları belirliyor, beğendiğiniz adaylarla görüntülü
          görüşme ayarlıyoruz.`,
        `Adayların deneyimini, eğitimini, referanslarını ve adli sicil kaydını inceliyoruz.
          Sağlık kontrolleri ve resmî işlemler de süreç içinde tamamlanıyor. Çalışanın Türkiye’ye
          gelişi, çalışma izni ve işe başlaması hem Türkiye’nin hem de Filipinler’in kurallarına
          uygun şekilde ilerliyor.`,
        `Amacımız sadece birini bulmak değil. Ailenizin kendini güvende hissettiği, beklentilerin
          baştan konuşulduğu ve uzun süre devam edecek bir çalışma ilişkisi kurmanıza yardımcı
          olmak istiyoruz.`,
      ],
      items: [
        {
          title: 'Bebek ve Çocuk Bakımı',
          description: `Çocuğunuzun günlük bakımını üstlenecek, yaşına uygun düzenini koruyacak
            ve gelişimine destek olacak deneyimli bakıcı ve dadı adayları.`,
          icon: 'tabler:baby-carriage',
        },
        {
          title: 'Yaşlı Bakımı ve Refakat',
          description: `Aile büyüklerinizin gündelik ihtiyaçlarında yanlarında olacak, onlara
            güvenle eşlik edecek adaylar.`,
          icon: 'tabler:heart-handshake',
        },
        {
          title: 'Hasta ve Engelli Bakımı',
          description: `Hasta ya da engelli yakınınızın evdeki bakımına yardım edecek, deneyimi
            ve yetkinliği ihtiyacın türüne göre değerlendirilmiş çalışanlar.`,
          icon: 'tabler:stethoscope',
        },
      ],
      imageAlt: 'Filipinli bir bakıcı, kucağında bir bebekle bir evin oturma odasında',
    },
    corporate: {
      id: 'kurumsal-cozumler',
      title: 'Kurumsal İş Gücü Çözümleri',
      paragraphs: [
        `Turizm, konaklama, üretim ve sanayi alanındaki işletmelerin yurt dışından personel
          arayışında yanlarındayız: adayları seçiyor, değerlendiriyor ve bütün süreci
          yönetiyoruz.`,
        `Önce işletmenizi, aradığınız pozisyonu ve çalışma koşullarını tanıyor, nasıl bir adaya
          ihtiyacınız olduğunu birlikte belirliyoruz. Ardından Filipinler’deki yetkili iş
          ortaklarımızla aday arayıp ilk elemeyi yapıyoruz. Seçtiğiniz çalışanların Türkiye’de
          yasal olarak çalışabilmesi için gereken çalışma iznini ve diğer resmî işlemleri de
          planlı şekilde, her adımını görebileceğiniz biçimde yürütüyoruz.`,
      ],
      items: [
        {
          title: 'Turizm ve Konaklama',
          description: `Otel, butik otel, restoran ve diğer turizm işletmelerinde kat
            hizmetleri, mutfak, servis ve misafir ilişkileri gibi görevlerde çalışabilecek
            adaylar.`,
          icon: 'tabler:bell-ringing',
        },
        {
          title: 'Üretim ve Sanayi',
          description: `Fabrika ve üretim tesislerinde üretim, paketleme, depo ve sevkiyat gibi
            işlerde çalışabilecek vasıflı, yarı vasıflı ya da işi öğrenmeye açık personel.`,
          icon: 'tabler:building-factory-2',
        },
        {
          title: 'Toplu İşe Alım',
          description: `Aynı anda birden fazla kişiye ihtiyacınız varsa pozisyonları birlikte
            belirliyor, adayların ilk değerlendirmesini yapıyor, görüşmeleri ayarlıyor ve seçilen
            çalışanların yasal sürecini planlıyoruz.`,
          icon: 'tabler:users-plus',
        },
      ],
      hospitalityAlt: 'Bir butik otelin resepsiyonunda misafiri karşılayan konaklama personeli',
      manufacturingAlt: 'Bir üretim tesisinde tablet başında toplanmış üretim ekibi',
    },
  },

  whyFilipino: {
    meta: {
      title: 'Neden Filipinli Bakıcı?',
      description: `Filipinli bakıcıları dünyanın birçok ülkesinde aileler sıkça tercih ediyor.
        Başlıca nedenleri bakım alanındaki deneyimleri, iyi İngilizceleri ve işlerine gösterdikleri
        özen.`,
    },
    hero: {
      tagline: 'Neden Filipinli Bakıcı?',
      title: 'Neden Filipinli Bakıcı?',
      paragraphs: [
        `Bakıcı seçmek, evinizin günlük hayatına ve en çok değer verdiğiniz insanların bakımına
          ortak olacak birini seçmek demek. Bu yüzden deneyim tek başına yetmez; güven veren,
          sorumluluk sahibi ve ailenize uyum sağlayabilecek biri olması da gerekir.`,
        `Filipinli bakıcıları dünyanın birçok ülkesinde aileler sıkça tercih ediyor. Bunun
          başlıca nedenleri bakım alanındaki uluslararası deneyimleri, iyi İngilizceleri ve
          işlerine gösterdikleri özen.`,
      ],
      imageAlt: 'Filipinli bir bakıcı, bir çocukla birlikte resimli kitap okuyor',
    },
    blocks: [
      {
        title: 'Gündelik Hayatta İngilizce',
        paragraphs: [
          `İngilizce konuşan bir bakıcıyla büyüyen çocuk, dili gündelik hayatın içinde
            kendiliğinden duyar. Bu da özellikle küçük yaşta İngilizceye alışmasına yardımcı
            olabilir.`,
        ],
        icon: 'tabler:message-language',
      },
      {
        title: 'Deneyimli ve Sorumlu Adaylar',
        paragraphs: [
          `Adayları bakım deneyimlerine, eğitimlerine, referanslarına ve işten beklentilerine
            bakarak değerlendiriyoruz. Ailenize uygun bulduğumuz adayları sizinle paylaşıyor,
            beğendiklerinizle görüntülü görüşme ayarlıyoruz.`,
        ],
        icon: 'tabler:certificate',
      },
      {
        title: 'Aile Düzenine Uyum',
        paragraphs: [
          `Her ailenin yaşam tarzı, öncelikleri ve beklentileri farklı. Bu yüzden aday seçerken
            öz geçmişle yetinmiyor; adayın nasıl iletişim kurduğuna, işe nasıl yaklaştığına ve
            ailenizle uzun vadede anlaşıp anlaşamayacağına da bakıyoruz.`,
        ],
        icon: 'tabler:home-heart',
      },
      {
        title: 'Güvenli ve Yasal Süreç',
        paragraphs: [
          `Filipinli ev çalışanlarının yurt dışında çalışması hem Türkiye’nin hem de
            Filipinler’in kurallarına tabi. Bu yüzden süreci yetkili kurumlarla ve Filipinler’deki
            yetkili iş ortaklarımızla birlikte yürütüyoruz: sözleşmeler hazırlanıyor, çalışma izni
            başvurusu yapılıyor, belgeler kontrol ediliyor ve gerekli resmî onaylar alınıyor.`,
          `Bu süre boyunca Türkiye’deki muhatabınız biziz. Her adımın düzenli ilerlemesini takip
            ediyor, sürecin neresinde olduğunuzu size her zaman açıkça söylüyoruz.`,
        ],
        icon: 'tabler:shield-check',
      },
    ],
  },

  about: {
    meta: {
      title: 'Hakkımızda',
      description: `EFKA Consulting’i, güvenilir bir çalışan arayan ailelerin ve işletmelerin
        ihtiyaç duyduğu desteği tek elden verebilmek için kurduk.`,
    },
    hero: {
      tagline: 'Hakkımızda',
      title: 'Hakkımızda',
      paragraphs: [
        `EFKA Consulting’i, güvenilir bir çalışan arayan ailelerin ve işletmelerin ihtiyaç
          duyduğu desteği tek elden verebilmek için kurduk.`,
        `Kurucumuz altı yıl hukuk müşaviri olarak çalıştı. Evrakta, sözleşmede ve süreç
          takibinde gösterdiğimiz titizliğin temeli o yıllara dayanıyor.`,
        `Filipinler’e odaklanarak çalışıyoruz. Ev ve bakım personelinin yanı sıra turizm,
          konaklama, üretim ve sanayi işletmeleri için de uygun adayları buluyor, yasal olarak
          işe başlamalarına kadar süreci yürütüyoruz.`,
      ],
    },
    mission: {
      title: 'Misyonumuz',
      description: `İşverenlerin aradıkları çalışana güvenli, açık ve düzenli bir yoldan
        ulaşmasını; çalışanların da işi ve çalışma koşulları baştan netleşmiş bir iş ilişkisiyle
        başlamasını sağlamak.`,
      icon: 'tabler:target-arrow',
    },
    vision: {
      title: 'Vizyonumuz',
      description: `Evde bakımdan kurumsal iş gücüne kadar, yurt dışından çalışan
        istihdamında güvenilir ve uzun soluklu bir danışmanlık firması olmak.`,
      icon: 'tabler:telescope',
    },
  },

  process: {
    meta: {
      title: 'Sürecimiz',
      description: `İhtiyacınızı konuştuğumuz ilk görüşmeden çalışanın Türkiye’ye gelişine
        kadar altı adımda ilerleyen, her aşamasını takip edebileceğiniz bir süreç.`,
    },
    hero: {
      tagline: 'Sürecimiz',
      title: 'Sürecimiz',
      subtitle: `Her ihtiyaç farklı. Bu yüzden işe size hazır bir aday listesi göndererek
        başlamıyoruz; önce ne aradığınızı ve çalışma koşullarını dinliyoruz.`,
    },
    steps: [
      {
        title: 'İhtiyacınızı konuşuyoruz',
        description: 'Nasıl birini aradığınızı, işin ne olduğunu ve beklentilerinizi birlikte konuşuyoruz.',
        icon: 'tabler:message-circle-search',
      },
      {
        title: 'Ön değerlendirme yapıyoruz',
        description: `Sizin ve pozisyonun bu süreç için uygun olup olmadığına bakıyor, nasıl bir
          yol izleyeceğimizi anlatıyoruz.`,
        icon: 'tabler:clipboard-check',
      },
      {
        title: 'Adayları seçiyoruz',
        description: 'İhtiyacınıza uyan adayları seçip size sunuyoruz.',
        icon: 'tabler:user-search',
      },
      {
        title: 'Görüşüp karar veriyorsunuz',
        description: `Adaylarla çevrim içi görüşüyorsunuz; isterseniz ek görüşmeler de
          ayarlıyoruz.`,
        icon: 'tabler:video',
      },
      {
        title: 'Belgeleri hazırlıyoruz',
        description: `Seçtiğiniz aday ve sizin için gereken belgeleri hazırlıyor, kurumlarla ve
          diğer taraflarla bütün yazışmaları biz yürütüyoruz.`,
        icon: 'tabler:file-check',
      },
      {
        title: 'Çalışan Türkiye’ye geliyor',
        description: `Uçuşu planlıyoruz. Çalışan gelip işe başladıktan sonra yapmanız gereken
          temel işlemleri de size anlatıyoruz.`,
        icon: 'tabler:plane-arrival',
      },
    ],
    cta: { variant: 'primary' as const, text: 'Bize Ulaşın', href: p('contact') },
  },

  faq: {
    meta: {
      title: 'Sık Sorulan Sorular',
      description: `Hangi alanlarda çalışan bulduğumuz, sürecin ne kadar sürdüğü, adayların
        nasıl seçildiği ve aracı kurum gerekip gerekmediği gibi sık sorulan sorular.`,
    },
    hero: {
      tagline: 'Sık Sorulan Sorular',
      title: 'Sık Sorulan Sorular',
    },
    items: [
      {
        title: 'Hangi alanlarda çalışan buluyorsunuz?',
        description: `Evler için bebek ve çocuk bakımı, yaşlı bakımı ve refakat, hasta ya da
          engelli bakımı; işletmeler için turizm, konaklama, üretim ve sanayi alanlarında Filipinli
          çalışan buluyoruz.`,
      },
      {
        title: 'Süreç ne kadar sürüyor?',
        description: `Adayı seçtiğiniz andan Türkiye’ye gelişine kadar ortalama iki ay. Evrakların
          hazırlanmasına, resmî onaylara ve uçuş planına göre bu süre biraz uzayıp kısalabilir.`,
      },
      {
        title: 'Adaylar nasıl seçiliyor?',
        description: `Deneyimli, eğitimli ve referanslı adaylardan oluşan havuzumuzdan size uygun
          olanları önceden seçiyoruz. Profillerini sizinle paylaşıyor, görüşmek istediğiniz
          adaylarla görüntülü görüşme ayarlıyoruz.`,
      },
      {
        title: 'Filipinli bir çalışanı aracı kurum olmadan getirebilir miyim?',
        description: `Filipinler’in yurt dışında çalışma kuralları gereği, ev çalışanlarının
          aracısız işe alınması yalnızca çok az sayıda istisnai durumda mümkün. Genellikle biri
          Filipinler’de, biri Türkiye’de olmak üzere iki yetkili kurum üzerinden ilerlenir.`,
      },
    ],
  },

  contact: {
    meta: {
      title: 'İletişim',
      description: `Aileniz ya da işletmeniz için nasıl bir çalışan aradığınızı bize yazın. İlk
        görüşmede sizi dinliyor, sürecin sizin için nasıl işleyeceğini açıkça anlatıyoruz.`,
    },
    hero: {
      tagline: 'İletişim',
      title: 'Size nasıl yardımcı olabiliriz?',
      subtitle: `Aileniz ya da işletmeniz için nasıl bir çalışan aradığınızı bize yazın. İlk
        görüşmede sizi dinliyor, sürecin sizin için nasıl işleyeceğini açıkça anlatıyoruz.`,
    },
    cta: { variant: 'primary' as const, text: 'Bize Yazın', href: 'mailto:info@efka-consulting.com' },
    details: [
      { title: 'E-posta', description: 'info@efka-consulting.com', icon: 'tabler:mail' },
      {
        title: 'Adres',
        description: 'Organize Sanayi Bölgesi 20.Cadde No:45 31. Caddesi No:2,<br />38070 Kayseri, Türkiye',
        icon: 'tabler:map-pin',
      },
    ],
  },

  /** Alt text for the panorama above the footer. */
  bannerAlt: 'İstanbul ve Kapadokya’yı bir arada gösteren panoramik görsel',
};
