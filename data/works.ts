export type Work = {
  slug: string;
  num: string;
  title: string;
  tag: string;
  tagColor: string;
  desc: string;
  meta: string;
  year: string;
  client: string;
  overview: string;
  process: string;
  result: string;
  tools: string[];
  images?: string[];
  subImages?: { label: string; src?: string }[];
};

export const works: Work[] = [
  {
    slug: "ec-web-creative",
    num: "01",
    title: "EC / Web Creative",
    tag: "Web Design",
    tagColor: "#a3e635",
    desc: "ECサイトのバナー、LINEリッチメニューなど、目的に合わせたデジタルクリエイティブを制作。",
    meta: "Photoshop / Web / Banner / LINE",
    year: "2018 — 2025",
    client: "事業運営支援会社",
    overview:
      "マーケティング企業在籍中、BtoB BtoC向けのデジタルクリエイティブを担当。季節ごとのキャンペーンバナー、LINEリッチメニューの設計まで、購買率向上・来店促進を目的とした販促ビジュアル制作を行ってきました。",
    process:
      "クライアントの販売目標や訴求ポイントをヒアリングし、視線誘導とCTAの配置を意識した設計を心がけました。テンプレートと素材のライブラリ化により品質と速度の両立を実現しました。",
    result:
      "毎月100点以上のクリエイティブを安定納品。バナーのクリック率改善やLP経由のコンバージョン向上に継続的に貢献しました。",
    tools: ["Photoshop", "Illustrator", "HTML", "CSS", "ChatGPT Images 2.0", "Adobe Firefly"],
    images: ["/works/ec_001.jpg"],
    subImages: [
      { label: "SNS配信用", src: "/works/line-002.jpg" },
      { label: "SNS配信用", src: "/works/line-003.jpg" },
      { label: "SNS配信用", src: "/works/line-004.jpg" },
      { label: "SNS配信用", src: "/works/line-005.jpg" },
      { label: "SNS配信用", src: "/works/line-006.jpg" },
      { label: "SNS配信用", src: "/works/line-007.jpg" },
      { label: "SNS配信用", src: "/works/line-008.jpg" },
      { label: "AI使用", src: "/works/ai_001.PNG" },
      { label: "AI使用", src: "/works/ai_002.PNG" },
      { label: "AI使用", src: "/works/ai_003.PNG" },
      { label: "AI使用", src: "/works/ai_004.PNG" },
      { label: "AI使用", src: "/works/ai_005.PNG" },
      { label: "AI使用", src: "/works/ai_006.PNG" },
      { label: "ABテスト用", src: "/works/ab_001.PNG" },
      { label: "ABテスト用", src: "/works/ab_002.PNG" },
      { label: "ECサイト", src: "/works/ec_002.jpg" },
      { label: "ECサイト", src: "/works/ec_003.jpg" },
      { label: "ECサイト", src: "/works/ec_004.jpg" },
      { label: "ECサイト", src: "/works/ec_005.jpg" },
      { label: "ECサイト", src: "/works/ec_006.jpg" },
      { label: "ECサイト", src: "/works/ec_007.jpg" },
      { label: "ECサイト", src: "/works/ec_008.jpg" },
    ],
  },
  {
    slug: "graphic-promotion",
    num: "02",
    title: "Graphic & Promotion",
    tag: "Graphic",
    tagColor: "#fb923c",
    desc: "新聞折込広告、ポスター、サイネージ広告、POP、冊子、名刺など、販促に必要な紙媒体を幅広く制作。　　　　　　　　　　　　　　　　　",
    meta: "Poster / Flyer / POP / DTP",
    year: "2010 — 2018",
    client: "小売・飲食・サービス業",
    overview:
      "有限会社アップワード在籍中、店舗販促に必要な紙媒体を幅広く担当。A4チラシからB0ポスター、店頭POP、会社案内冊子まで、用途とターゲットに合わせたビジュアルを提供しました。",
    process:
      "印刷仕様の理解とカラーマネジメントを徹底し、データ精度を高めることを意識しました。デザインの前に目的と受け手を整理し、「誰に、何を伝えるか」をシンプルに設計しました。",
    result:
      "紙媒体のデザインからWeb制作、動画撮影・編集まで、幅広いビジュアル制作に携わってきました。",
    tools: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "private-label-design",
    num: "03",
    title: "Private Label Design",
    tag: "Package",
    tagColor: "#a78bfa",
    desc: "店舗向けオリジナルラベルや販促物など、商品の魅力が伝わるビジュアルを設計。",
    meta: "Label / Package / Sales Promotion",
    year: "2010 — 2025",
    client: "食品・飲料・日用品メーカー",
    overview:
      "オリジナル商品のラベルデザインおよびパッケージビジュアルの設計を担当。商品コンセプトをヒアリングし、棚での視認性と購買意欲を同時に高めるデザインを提案しました。",
    process:
      "食品衛生法に基づく表示事項の確認から、印刷会社との入稿調整まで、制作プロセス全体をディレクション。機能性とデザイン性のバランスを取るためのレイアウト検討を重ねました。",
    result:
      "複数の商品が実店舗での展開に至り、リピート発注につながるデザインを実現しました。パッケージのビジュアルが売上貢献に直結した事例もあります。",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    slug: "movie-direction",
    num: "04",
    title: "Movie & Direction",
    tag: "Direction",
    tagColor: "#38bdf8",
    desc: "番組テロップ、ブライダル映像、イベント進行など、静止画にとどまらない表現も経験。",
    meta: "Movie / Telop / Event",
    year: "2007 — 2018",
    client: "ブライダル・イベント・放送",
    overview:
      "映像テロップのデザインからブライダル向けスライドショー、イベント当日のオペレーションまで、動きのある表現と場の演出を幅広く担当しました。",
    process:
      "映像制作では音楽と映像のタイミング合わせを重視し、見る人の感情の流れを意識した構成を設計しました。イベントディレクションでは事前準備と当日のイレギュラー対応が重要な仕事でした。",
    result:
      "ブライダル映像では感動体験を作り出すことへの責任と達成感を強く感じ、口コミによる紹介案件にもつながりました。",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
