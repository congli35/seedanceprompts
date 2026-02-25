export type PromptSource = "X" | "Manual";

export type SeedancePromptInput = {
  source: PromptSource;
  sourceUrl: string;
  id?: string;
  duration?: string;
  videoUrl?: string;
  prompt?: string;
  createdAt?: string;
};

export type SeedancePrompt = SeedancePromptInput & {
  id: string;
  createdAt: string;
};

function getTodayLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const DEFAULT_CREATED_AT = getTodayLocalDate();

const seedancePromptInputs: SeedancePromptInput[] = [
  {
    source: "X",
    sourceUrl: "https://x.com/KingBootoshi/status/2021349878232907790",
    prompt: "Luffy coding on a Macbook on the Thousand Sunny, RAGING, then throwing it overboard.",
  },
  {
    source: "X",
    sourceUrl: "https://x.com/EHuanglu/status/2025161355171332552",
  },
  {
    source: "X",
    sourceUrl: "https://x.com/liyue_ai/status/2026132584468709489",
    prompt: `主体：
真实摄影风格，一位年轻漂亮的亚洲女性坐在高层建筑的飘窗前，穿着非常宽松的白色衬衣，露出左侧肩膀，POV视角，女性用右手试图挡住镜头，脸上带着一抹浅浅的微笑，自然光线，细腻真实，有胶片颗粒感。

镜头保持主观视角（POV），她笑着轻轻推了一下镜头，伴随着衣袖摩擦的细微\`沙沙\`声，语气带着半真半假的娇嗔：\`哎呀……别拍我了嘛。\`

随即，她放下了挡在镜头前的手，身体不再后退，反而主动前倾凑近镜头，直到精致的面孔占据了大半个画面。她眼里的笑意加深，直视着镜头，压低声音，语气变得暧昧且充满挑逗：\`别拍了……我们来做点别的事吧？（停顿）毕竟……我是你生成的AI，你想对我干嘛……就可以干嘛呀。\` 说完，她轻轻咬了一下下唇，呼吸声清晰可闻。背景中窗外的城市喧嚣被隔绝，只有室内安静暧昧的空气流动声。`,
  },
];

export const seedancePrompts: SeedancePrompt[] = seedancePromptInputs.map((entry, index) => {
  const fallbackId = `${entry.source.toLowerCase()}-${index + 1}`;

  return {
    ...entry,
    id: entry.id ?? fallbackId,
    createdAt: entry.createdAt ?? DEFAULT_CREATED_AT,
  };
});
