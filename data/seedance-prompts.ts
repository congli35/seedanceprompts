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
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026481512607265116",
    "prompt": "真人写实风格 ，竖屏，第一人称男友视角。在昏暗的KTV包厢内，背景有紫色和蓝色的霓虹激光灯闪烁。一位漂亮的年轻亚洲女性坐在黑色皮沙发上，黑色长发披肩，身穿黑色露肩亮片毛衣，戴着精致项链。动作描述：她正对着镜头微笑，眼神温柔，身体随着背景音乐轻微晃动，随后她拿起桌上的麦克风准备唱歌。灯光在她的脸上和衣服上留下流动的光影，营造出暧昧且真实的氛围。"
  },
   {
    source: "X",
    sourceUrl: "https://x.com/liyue_ai/status/2026132584468709489",
    prompt: `主体：
真实摄影风格，一位年轻漂亮的亚洲女性坐在高层建筑的飘窗前，穿着非常宽松的白色衬衣，露出左侧肩膀，POV视角，女性用右手试图挡住镜头，脸上带着一抹浅浅的微笑，自然光线，细腻真实，有胶片颗粒感。

镜头保持主观视角（POV），她笑着轻轻推了一下镜头，伴随着衣袖摩擦的细微\`沙沙\`声，语气带着半真半假的娇嗔：\`哎呀……别拍我了嘛。\`

随即，她放下了挡在镜头前的手，身体不再后退，反而主动前倾凑近镜头，直到精致的面孔占据了大半个画面。她眼里的笑意加深，直视着镜头，压低声音，语气变得暧昧且充满挑逗：\`别拍了……我们来做点别的事吧？（停顿）毕竟……我是你生成的AI，你想对我干嘛……就可以干嘛呀。\` 说完，她轻轻咬了一下下唇，呼吸声清晰可闻。背景中窗外的城市喧嚣被隔绝，只有室内安静暧昧的空气流动声。`,
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026269308083634683",
    "prompt": "60秒仙侠漫剧小短片-男女修者大战魔兽 。场景描述：云雾缭绕的仙山之巅，巨大的魔兽咆哮，男女修者手持仙剑，剑气纵横，动作流畅且具有史诗感。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026287013515980957",
    "prompt": "16:9横屏 ，第一人称驾驶舱视角，极品飞车游戏风格，夜间霓虹赛道。极品飞车-漂移过弯，仪表盘指针跳动，窗外霓虹灯光飞速掠过。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023011996548186277",
    "prompt": "真假美猴王-60秒3D动画电影风格 。两个孙悟空在空中激战，金箍棒碰撞产生火花，背景是宏大的天宫场景，画质细腻，动作极具张力。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2022651034271982035",
    "prompt": "时尚变装秀超燃30秒视频 。模特在不同场景间快速切换服装，动作连贯，光影效果极佳，展示了 Seedance 2.0 强大的角色一致性和服装模拟能力。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2022497950984016019",
    "prompt": "春丽大战红风超燃打戏58秒视频 。经典的格斗游戏角色对决，招式还原度高，打击感强，特效华丽。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2022926699864969656",
    "prompt": "Seedance 2.0 提示词技巧实战演示：如何利用顶级 AI 大模型辅助生成高质量视频提示词 。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021572889959682286",
    "prompt": "一个Skill轻松生成Seedance 2.0专业视频提示词 。展示了如何通过结构化提示词提升视频生成的专业度。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021472050075070568",
    "prompt": "fast action movie scene, hand-held camera, the woman notices the pilots. 快速动作电影场景 ，手持摄影机拍摄，女性角色注意到飞行员的瞬间。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021471026853576963",
    "prompt": "More Seedance 2.0 tests. 更多 Seedance 2.0 测试作品展示 ，涵盖不同风格的短片片段。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021471619412263345",
    "prompt": "A realistic cinematic scene begins in a vast desert, transition to a futuristic city. 真实的电影感场景 ，从广袤的沙漠过渡到未来主义城市。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021471225563013451",
    "prompt": "Seedance V2 will open the door for fans worldwide. 展示了 Seedance 2.0 在全球粉丝创作中的潜力 。"
  },
  {
    source: "X",
    sourceUrl: "https://x.com/EHuanglu/status/2025161355171332552",
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/KingBootoshi/status/2021349878232907790",
    "prompt": "Luffy coding on a Macbook on the Thousand Sunny, RAGING, then throwing it overboard."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/EHuanglu/status/2020828503810445785",
    "prompt": "2 women fighting in a high-octane action sequence."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aagave/status/2023871236955402752",
    "prompt": "A cinematic and chaotic tracking shot with handheld camera, customized video game highlights."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/KETAN835/status/2023232056248168731",
    "prompt": "Yuji vs Mahito — Jujutsu Kaisen module — with fluidity, weight, and timing straight out of an anime."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Tech_AI_Rasel/status/2024300288354734172",
    "prompt": "Dark aesthetic cinematic video of a faceless AI content creator working at night."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2025895708226629650",
    "prompt": "End with the first frame to create a looping video."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/TheAIColonyRD/status/2021969522568380808",
    "prompt": "Overhead shot of hands chopping vegetables on a wooden cutting board. The knife moves rhythmically."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Mho_23/status/2021310507584807389",
    "prompt": "AI UGC style video generated with a single prompt."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2021204908909945287",
    "prompt": "Dynamic motion feels fluid, prompt adherence is solid, and the efficiency really stood out."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021674125106761882",
    "prompt": "All text-to-video except the car video and mma."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/HashemGhaili/status/2022713314770575790",
    "prompt": "Testing emotions in Seedance 2.0. Truly incredible! This entire scene was made with 3 images."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2025846398189515108",
    "prompt": "Seedence 2.0 nailed this prompt in one go. This is what AI filmmaking tools like now."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/zhzHNN/status/2023183788952670436",
    "prompt": "A family is defending a monster."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/karim_yourself/status/2022374070713552912",
    "prompt": "Raw Seedance 2.0 outputs with prompt drop in comments."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/billywoodward/status/2025940130175811969",
    "prompt": "Seedance 2.0 is the next frontier for AI Animation. Genuine and effective storytelling."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/ailockup/status/2024599305244512364",
    "prompt": "Create Film With Fight Scene | New AI Video Generator Text To Video And Image To video maker."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024943712942322025",
    "prompt": "Character Design : Midjourney + (Nano Banana @LeonardoAi)."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/alvinfoo/status/2025437189329617295",
    "prompt": "Someone crafted a James Bond scene that feels like real."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/james_bonds0/status/2023823716971630672",
    "prompt": "When villains collaborate, legends are born. Seedance 2.0 is your next move."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/RoundtableSpace/status/2025356109020549233",
    "prompt": "JAMES BOND x SEEDANCE 2.0."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Just_sharon7/status/2025164052415066305",
    "prompt": "James Bond × Seedance 2.0. Still pretty awkward tbh but I can see why they're saying full movies will made by ai."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/PromptRage/status/2021933385623470432",
    "prompt": "John Wick vs James Bond in Seedance 2.0 The slo-mo throw alone is insane."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/underwoodxie96/status/2023237877908312375",
    "prompt": "Emotions: confidence, seduction, movement, coolness."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/TanayVasishtha/status/2021629774452732202",
    "prompt": "This video literally matches the emotions and personality of walter white."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/iamjordan/highlights",
    "prompt": "Hearing real voices and emotions beats staring at another dashboard all day."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/NACHOS2D_/status/2022279670444560657",
    "prompt": "This entire animation was created from just a single prompt in Seedance 2.0."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026163095719067808",
    "prompt": "Seedence 2.0 is redefining kids animation."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/linyi_zheng/status/2023925430009606589",
    "prompt": "Disney-style animation - sci-fi fiction - cinematic storytelling."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/PJaccetturo/status/2021592635870200136",
    "prompt": "Someone can type a cinematic prompt into Seedance and get an incredible action scene."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2022429490669039741",
    "prompt": "Dialogue-driven Sci-fi comedy shots and even a singing scene."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Alin_Reaper05/status/2022881820396720199",
    "prompt": "Curated Seedance 2.0 prompt collection: sci-fi fiction - cinematic storytelling - game visuals."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/LillyLiCT/status/2021590006737867182",
    "prompt": "Remade my old horror hallway scene! Sora nailed the physics & atmosphere."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/ChrisGwinnLA/status/2021438135335633148",
    "prompt": "Melodramatic 1960s Gothic Horror vibe."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021409156947734958",
    "prompt": "Medium tracking shot following a creature, strong physicality, cinematic horror realism."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/xmliisu/status/2024159828386423007",
    "prompt": "The ultimate anime vs. horror showdown."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/emollick/status/2021409874832392508",
    "prompt": "A nature documentary about an otter flying an airplane."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/ChinaTechTrend/status/2021822485537444137",
    "prompt": "A nature documentary about an otter piloting an airplane."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/YJstacked/status/2022024457989370257",
    "prompt": "Nature variations of the same prompt with different inputs."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/minchoi/status/2021372081359712555",
    "prompt": "Time Traveler (Made with Seedance 2.0) I created this time travel short scene."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Saundersnp/status/2021493583224730052",
    "prompt": "Create a high-end cinematic food reel video."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/TyBrad5/status/2023558831608086549",
    "prompt": "Generated with Seedance 2.0 from a single prompt. Hollywood isn't ready."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2024840204490584088",
    "prompt": "Powerful cinematic sports anthem building to a climax."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/underwoodxie96/status/2024882892414104024",
    "prompt": "A 10-second dynamic video shows a modern sports car transforming into a Transformer."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/DietBeginsMon/status/2021676482092052598",
    "prompt": "Casual Sports Fan, one-shot my first prompt."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Morph_VGart/status/2021493583224730052",
    "prompt": "Vibey music video clip with Seedance 2.0 using 3 midjourney images."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/CozyLinaGirl2/status/2022250200266334592",
    "prompt": "Cyberpunk detective walking in the rain."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Whizz_ai/status/2022194346033131608",
    "prompt": "Cyberpunk alley chase, neon reflections on wet pavement."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2026062889287651528",
    "prompt": "Futuristic exposed-engine racer. Visible pistons. Red core. Cyberpunk realism."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/AIARTGALLARY/status/2024726854301794676",
    "prompt": "Bioluminescent Deep-Sea Siren test Prompt. Steampunk Clockwork Valkyrie Transformation."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/ImgMotion/status/2021901586889428999",
    "prompt": "Steampunk time traveler outfit with a top hat."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/john_my07/status/2023700948456251817",
    "prompt": "A surreal cinematic aerial shot of a futuristic megacity."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/brentmichaelcox/status/2021805672401178823",
    "prompt": "A surreal battlefield in the sky: floating rock islands drifting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2021901586889428999",
    "prompt": "The Leviathan's Throat Underwater. A surreal battlefield in the sky."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/DreamStarter_1/status/2022250200266334592",
    "prompt": "Cyberpunk noir satire on tech debt, with high-stakes."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/BrentLynch/status/2021684335045489052",
    "prompt": "The Spaghetti Western Standoff (15 Seconds)."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/meng_dagg695/status/2021684335045489052",
    "prompt": "The samurai on the right teleports in a blur of black smoke."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/MrDavids1/highlights",
    "prompt": "An epic fight between a samurai and a flaming lava oni."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/seirdotmk/status/2021684335045489052",
    "prompt": "A Samurai Warrior portrayed as a Monochromatic Phantom."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/chatgpt21/status/2026185287747985920",
    "prompt": "Show what's happening in Silicon Valley space."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/bstuartTI/status/2021299278455681206",
    "prompt": "1 detailed prompt with 5 cuts specified and a cinematic look."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/AJNguyenYT/status/2026239740874555546",
    "prompt": "Seedance 2.0 is blocking out faces from being generated."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/tarynoneill/status/2020607054352928988",
    "prompt": "The fully disruptive Gen AI model is here."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/riyazmd774/status/2022590380420796541",
    "prompt": "Prompting is basically directing. The magic of Seedance 2.0."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/deedydas/status/2020911900968767976",
    "prompt": "Native audio gen (lipsynced speech) in Seedance 2.0."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/zijing_wu/status/2021021909014749635",
    "prompt": "Goes beyond cinematic video, and can do product demos as well."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/alex_prompter/status/2025633828459389023",
    "prompt": "Adding 'cinematic' or '4K' at the end consistently improves output quality."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/SimplyAnnisa/status/2026334235204940003",
    "prompt": "Cinematic magic, VFX, and consistent characters — all in one prompt."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/PhilHedayatnia/status/2022869094513639826",
    "prompt": "100% indistinguishable from reality even when you're looking for it."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/DeryaTR_/status/2021439891167707412",
    "prompt": "Seedance 2.0 definitely feels more cinematic than Sora 2."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/NeomMV/status/2021875170827235585",
    "prompt": "Apply different emotions, facial expressions, and voice levels."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/woleswoosh/status/2020305327749763090",
    "prompt": "Emotions and facial expressions during the video generation."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/MattVidPro/highlights",
    "prompt": "SeeDance 2.0 makes Sora look dated. Real-time kinematic travel."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/ilhamautomation/status/2022547926573343102",
    "prompt": "Transforming 'a cyberpunk city scene' into frame-by-frame production."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/rovvmut_/status/2022547926573343102",
    "prompt": "Futuristic cyberpunk shots that look production-ready."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/ponyodong/status/2022547926573343102",
    "prompt": "Natural language flow, dark aesthetic steampunk."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/autorambler_ru/status/2022547926573343102",
    "prompt": "Cyberpunk neon aesthetics, high-definition beauty."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Mattzh1314/status/2022547926573343102",
    "prompt": "Upload a script, it generates scenes (not just clips)."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026481512607265116",
    "prompt": "真人写实风格，竖屏，第一人称男友视角。在昏暗的KTV包厢内，背景有霓虹激光灯闪烁。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Web3zy8/status/2022547926573343102",
    "prompt": "六大门派围攻光明顶的短剧剧情。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/markgadala/status/2021611931480609139",
    "prompt": "Luffy and Goku having an epic fight scene on the sunny."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Motion_Viz/status/2022133876622016928",
    "prompt": "luffy in netflix brand styling on top of a mountain, gear 5."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/HaydenLeeWrites/status/2022133876622016928",
    "prompt": "Generate a video from a screenshot of the One Piece manga."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/lexx_aura/status/2026342101420494939",
    "prompt": "What your cat doing at 3AM - Cinematic video, Hollywood animation."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/vfxpro88/status/2023280759059235141",
    "prompt": "Cat monster with a polar bear - attach reference → type prompt."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/GaryD20Games/status/2023944722796994704",
    "prompt": "Crazy chase sequences with cinematic and chaotic tracking shot."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2024570203057635441",
    "prompt": "One Cat Against the Horde - Heroic & Fun fight scene."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/spinningsensei/status/2021602487195562068",
    "prompt": "A cat spinning and signing oiiaoiia version of feel good inc on a floating island."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/0xbisc/status/2022496605488976175",
    "prompt": "A boy rescuing his dog from an oncoming car."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/DeryaTR_/status/2024268576396362194",
    "prompt": "My son and daughter, my dog and a random toy on shelf."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Rodrigogodzilla/status/2021666237139521542",
    "prompt": "A boy is running, then is on a skateboard with a dog/wolf."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/0xbisc/status/2022560126528565506",
    "prompt": "Phew… that was close. A boy rescuing his dog from an oncoming car."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2025726548330881425",
    "prompt": "A young teenage boy transforming into a superhero in a fantasy atmosphere."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/TechyTricksAI/status/2023352436249817407",
    "prompt": "A 12-second epic fantasy with final light burst and title reveal."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Zopia_AI/status/2022355091223908496",
    "prompt": "Cinematic 1980s dark fantasy ensemble shot of the Stranger Things party in a ruined lab."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/DeivonDrago/status/2022039043723161631",
    "prompt": "An average shift at Waffle House - make sure to capture the atmosphere."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/SDxArt/status/2020296241297416682",
    "prompt": "Fashion video with pose switches, outfit cuts, and fisheye lens."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Mrczar_/status/2024758685180854547",
    "prompt": "A full fashion campaign with studio-level quality."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Ignis_Rex/status/2023543943229837611",
    "prompt": "Just one prompt, and Seedance 2.0 handles the entire dance sequence."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/TheoMediaAI/highlights",
    "prompt": "She walks into a Pirate Tavern - testing with a nonsense First/Last Frame."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021472050075070568",
    "prompt": "fast action movie scene, hand-held camera, the woman notices the pilots."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2022497950984016019",
    "prompt": "春丽大战红风超燃打戏58秒视频。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022691631720251793",
    "prompt": "Seedance 2.0 实战Prompt 结构化拆解，主体锚点测试。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022493382275154312",
    "prompt": "你要给它一段力，Seedance 2.0 动作逻辑拆解。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Adam38363368936/status/2022493382275154312",
    "prompt": "《worth it》动感跳舞视频，AI女友跳舞生成。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heizi_is_a_dog/status/2022493382275154312",
    "prompt": "好莱坞大片场景变形金刚提示词生成。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025383929260229031",
    "prompt": "Gargantuan Whales of the Deep - nature cinematic sequence."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2022623073229279638",
    "prompt": "Alien megacity overtaken by hostile extraterrestrial life."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026018170717253667",
    "prompt": "VFX quality test with Seedance 2.0, adding custom twists to existing prompts."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2026062885949157859",
    "prompt": "Extending clips flawlessly with continuous soundtrack."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2022926699864969656",
    "prompt": "Seedance 2.0 提示词技巧实战演示。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2021608789670052020",
    "prompt": "自定义微调 Prompt 实验，摸索 Seedance 2.0 边界。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/molly9975019573/status/2021608789670052020",
    "prompt": "《币安修仙记》AI 视频制作，一张照片一个提示词。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/RichardJia84322/status/2021608789670052020",
    "prompt": "炸裂的 AI 视频生成，Seedance 2.0 玩家实测。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/travider/status/2025900000000000000",
    "prompt": "Seedance 2.0 积分实测，多幕视频生成尝试。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/1usttttt/status/2025900000000000000",
    "prompt": "多模态智能体理解图片内容，分镜表现出色。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/beefnoode/status/2025900000000000000",
    "prompt": "模型层级推测，海量素材喂养下的视频生成能力。"
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2022756805297501595",
    "prompt": "Surreal Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025073005053098510",
    "prompt": "UGC Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2020484560493741899",
    "prompt": "Sci-fi Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2024323597923466823",
    "prompt": "Horror Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026809423720551454",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2024414296618240410",
    "prompt": "Anime Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024872918516258121",
    "prompt": "Cinematic Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2021899304418698858",
    "prompt": "Action Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2025267355017536245",
    "prompt": "Sci-fi Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2024808962117961107",
    "prompt": "Horror Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025138582409019634",
    "prompt": "UGC Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2022470392167281158",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2022336008652579188",
    "prompt": "Fashion Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022288461525846001",
    "prompt": "Food Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2023403740343383136",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2026713291962919921",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2022077258844696963",
    "prompt": "Food Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020260156824768220",
    "prompt": "Cinematic Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2024331653053827611",
    "prompt": "Fashion Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2024341327685905547",
    "prompt": "Cinematic Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2026503066730257766",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2024996968669602758",
    "prompt": "Food Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026125497270582860",
    "prompt": "Action Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2025359227456986447",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2025524649238566087",
    "prompt": "Fashion Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2021780365540725091",
    "prompt": "Nature Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2020712236852715150",
    "prompt": "UGC Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025170092785707637",
    "prompt": "Anime Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2023078561230595424",
    "prompt": "Horror Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022026987444055311",
    "prompt": "Sci-fi Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2020818340912582720",
    "prompt": "Anime Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2024263543475952624",
    "prompt": "Action Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025879845574647919",
    "prompt": "Nature Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2021430308050807242",
    "prompt": "Nature Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2023889821962755243",
    "prompt": "Food Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025579577339907404",
    "prompt": "Surreal Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2022084446532723882",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026387047482592527",
    "prompt": "Food Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2026105133565337174",
    "prompt": "Horror Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2026405782128817185",
    "prompt": "Fashion Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2025618022274006341",
    "prompt": "Food Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2026055324395849707",
    "prompt": "Fashion Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024479013689530979",
    "prompt": "Anime Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022616752768755548",
    "prompt": "Nature Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2023118489769579362",
    "prompt": "Horror Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023131073406969774",
    "prompt": "Food Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2024177511603672285",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026106805627145230",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023002183507681736",
    "prompt": "Action Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2025225162547157690",
    "prompt": "Action Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2023847288106771262",
    "prompt": "Cinematic Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2026201997118342349",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2022715364730811768",
    "prompt": "Action Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2026630532385803782",
    "prompt": "Cinematic Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025608067040227334",
    "prompt": "Surreal Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2025318985830784730",
    "prompt": "Anime Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2023132248572729211",
    "prompt": "Food Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023246839377774888",
    "prompt": "Cinematic Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2021135358168488821",
    "prompt": "UGC Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2021362825521786575",
    "prompt": "Sci-fi Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2024414989972908905",
    "prompt": "Anime Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022855440086379482",
    "prompt": "Surreal Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2020756407199351778",
    "prompt": "UGC Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024490986358039233",
    "prompt": "Fashion Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2026528117273434857",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2021501075928606909",
    "prompt": "UGC Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023194117229294970",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026249278232408861",
    "prompt": "UGC Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025133505153724893",
    "prompt": "Food Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2020758266039352981",
    "prompt": "Action Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023874347421147273",
    "prompt": "Surreal Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2021842195600643781",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2024411450568720278",
    "prompt": "Action Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026028492495978919",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2020064635038607980",
    "prompt": "Sci-fi Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2024962349977842530",
    "prompt": "Nature Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2021431463421081924",
    "prompt": "Nature Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026292739593315959",
    "prompt": "Nature Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2023468697772023125",
    "prompt": "Anime Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2024080496835177228",
    "prompt": "Sci-fi Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2021139482000328424",
    "prompt": "Horror Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2026844272388439672",
    "prompt": "UGC Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2022844089500076305",
    "prompt": "UGC Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2021039853100584390",
    "prompt": "Sci-fi Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025959600250416239",
    "prompt": "Nature Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2022824608109222354",
    "prompt": "Anime Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2021815264820854477",
    "prompt": "Anime Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2026470291679390235",
    "prompt": "Food Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2020932646961845449",
    "prompt": "Sci-fi Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025104341573601355",
    "prompt": "Sci-fi Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2024869044992281028",
    "prompt": "Surreal Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026307594711698010",
    "prompt": "Cinematic Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2024919755790899582",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020864265729925383",
    "prompt": "Horror Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2023582658948677490",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023173210517010155",
    "prompt": "Cinematic Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2021119772373227416",
    "prompt": "Sci-fi Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2020379243381643109",
    "prompt": "Fashion Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2020794811905880870",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2024705256816108278",
    "prompt": "Fashion Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024606162070571187",
    "prompt": "Sci-fi Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2023359317693829189",
    "prompt": "Fashion Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2025025155698815019",
    "prompt": "Anime Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2025830264109574342",
    "prompt": "Action Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2020630303828556194",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020734781091039558",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2026208914620170683",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025483796788167225",
    "prompt": "Nature Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2021771081128013171",
    "prompt": "Fashion Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023293567683755334",
    "prompt": "Horror Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2022503984398937478",
    "prompt": "Fashion Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2020310901922326398",
    "prompt": "Action Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2021051007669329264",
    "prompt": "Nature Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023327884203415711",
    "prompt": "Fashion Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2026343789141303507",
    "prompt": "Fashion Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2021885011075260604",
    "prompt": "Horror Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024032750899611750",
    "prompt": "UGC Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026281823351726157",
    "prompt": "Nature Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025149310023663662",
    "prompt": "Action Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2026975402696241180",
    "prompt": "Cinematic Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2026192292539576974",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2024775186340471816",
    "prompt": "Action Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2024865827553549651",
    "prompt": "Sci-fi Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2024657039854710484",
    "prompt": "Sci-fi Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024941002166798279",
    "prompt": "Anime Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2021710004725406013",
    "prompt": "Nature Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2025456850598186411",
    "prompt": "Surreal Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026567013568227175",
    "prompt": "Sci-fi Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023936552542938763",
    "prompt": "Nature Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2021230914966650613",
    "prompt": "Fashion Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2022868405094760279",
    "prompt": "Fashion Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2021659532647225693",
    "prompt": "Sci-fi Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024873386874360233",
    "prompt": "Horror Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2022306869332271638",
    "prompt": "Sci-fi Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2021807759589034268",
    "prompt": "Nature Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023339202318196929",
    "prompt": "Food Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025602158876842169",
    "prompt": "Horror Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023282997265872031",
    "prompt": "Action Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2024172234544065093",
    "prompt": "Food Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2022092516833558087",
    "prompt": "Anime Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2022100333199611209",
    "prompt": "Horror Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2020259283603827016",
    "prompt": "Cinematic Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2024886365459070571",
    "prompt": "Fashion Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021672678195311274",
    "prompt": "Nature Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2024133119901060789",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2024890411647263733",
    "prompt": "Anime Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2021586777352782366",
    "prompt": "Nature Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2020285770095597981",
    "prompt": "UGC Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2022645432348755321",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2024530888650633319",
    "prompt": "Fashion Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026083783014904579",
    "prompt": "Fashion Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025312362946979764",
    "prompt": "UGC Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2024326609414653732",
    "prompt": "UGC Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2024913856176138117",
    "prompt": "Fashion Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025065343505201840",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022265304023864785",
    "prompt": "Sci-fi Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2026205632109945216",
    "prompt": "Food Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2020773133806800610",
    "prompt": "Anime Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022369640742691629",
    "prompt": "Anime Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2026254494427527061",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2024018541477951645",
    "prompt": "Action Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021568313564051569",
    "prompt": "Action Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2021631950962834332",
    "prompt": "Sci-fi Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2021599822694605529",
    "prompt": "Fashion Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2022331036645082568",
    "prompt": "UGC Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2024846116596726742",
    "prompt": "Food Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2024225038777912979",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026977444442251934",
    "prompt": "UGC Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023164619850920265",
    "prompt": "Horror Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022637107265131172",
    "prompt": "Food Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2026976246971184504",
    "prompt": "Anime Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2023885275368237551",
    "prompt": "Action Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2022113484592483022",
    "prompt": "Nature Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2022957820257143734",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2024879397021070071",
    "prompt": "Fashion Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2021254090273174971",
    "prompt": "Anime Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2021575876340231338",
    "prompt": "Action Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023130738522666130",
    "prompt": "Surreal Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2023462927283744354",
    "prompt": "Anime Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2020805424890282845",
    "prompt": "Horror Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023026529377281852",
    "prompt": "Cinematic Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2020871833826919937",
    "prompt": "Nature Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2026519407741207090",
    "prompt": "Nature Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2026010203709188142",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026481611720906077",
    "prompt": "Nature Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2020695205302591070",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2020685556210749285",
    "prompt": "Anime Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2026800532954996568",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2026560801675988460",
    "prompt": "Action Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2026862034634485687",
    "prompt": "Fashion Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2020035584213988107",
    "prompt": "UGC Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2024371331329608556",
    "prompt": "Horror Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023507789324358439",
    "prompt": "Nature Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2022489428923368124",
    "prompt": "Anime Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2026704698715891472",
    "prompt": "Action Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2025200366111211453",
    "prompt": "Sci-fi Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2024121447040724533",
    "prompt": "Nature Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023194591317782827",
    "prompt": "Horror Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020799082486430032",
    "prompt": "Food Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2025714832610784827",
    "prompt": "UGC Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023977632360686555",
    "prompt": "Nature Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2023808515283208723",
    "prompt": "Action Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2022544264523276895",
    "prompt": "Action Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2024149655579422454",
    "prompt": "Horror Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2026685690104778441",
    "prompt": "Fashion Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026281162742153542",
    "prompt": "Fashion Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2021406577603405668",
    "prompt": "Cinematic Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025431875051285012",
    "prompt": "Food Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2026661447913887590",
    "prompt": "Fashion Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021096462763834964",
    "prompt": "UGC Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023492150260310579",
    "prompt": "Horror Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2024248233839783119",
    "prompt": "Anime Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2022301526852714513",
    "prompt": "Cinematic Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2020550652809773982",
    "prompt": "Food Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2023061856449011219",
    "prompt": "Cinematic Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2024517550676801394",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021656117989307561",
    "prompt": "Fashion Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023253121790495608",
    "prompt": "Surreal Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2025742742720053300",
    "prompt": "Food Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2022210543967257217",
    "prompt": "UGC Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2020401176124714172",
    "prompt": "Nature Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2020319218054279582",
    "prompt": "Action Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022011066469876070",
    "prompt": "Sci-fi Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2025556594631474633",
    "prompt": "Food Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020024570509174916",
    "prompt": "Cinematic Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022947148334936824",
    "prompt": "Horror Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2023602715757077068",
    "prompt": "Nature Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2020794080602332612",
    "prompt": "Surreal Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2023321271166946551",
    "prompt": "Anime Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2021675867697203834",
    "prompt": "Sci-fi Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2020772853332965144",
    "prompt": "Cinematic Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023786119728034267",
    "prompt": "Nature Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2022207676467802671",
    "prompt": "UGC Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2024735217515782818",
    "prompt": "UGC Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021995722299002504",
    "prompt": "Nature Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025940193072137686",
    "prompt": "Sci-fi Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023046720480818660",
    "prompt": "Sci-fi Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2024306279901305747",
    "prompt": "Fashion Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021892758893488596",
    "prompt": "Cinematic Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2025166511925725695",
    "prompt": "Fashion Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2023102529131242570",
    "prompt": "Horror Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2026433740249479413",
    "prompt": "Fashion Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020230633872928948",
    "prompt": "Nature Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2020502107812036360",
    "prompt": "Sci-fi Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022075928020597156",
    "prompt": "Fashion Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025204099483227602",
    "prompt": "Sci-fi Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2020315138457754711",
    "prompt": "Nature Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2026395576224861002",
    "prompt": "UGC Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2024127193398299729",
    "prompt": "Food Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2026742386671083427",
    "prompt": "Food Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2020096244400554828",
    "prompt": "Action Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2023473389141729731",
    "prompt": "UGC Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2023793780575425586",
    "prompt": "Fashion Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2024589338265378855",
    "prompt": "Nature Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2020659048813286331",
    "prompt": "Horror Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026700317368407356",
    "prompt": "Sci-fi Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2022952117742977985",
    "prompt": "Horror Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021642000401214669",
    "prompt": "Surreal Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025332721803662335",
    "prompt": "Surreal Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2021419815269915065",
    "prompt": "Food Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2025304348921141041",
    "prompt": "Anime Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023212776320729356",
    "prompt": "Cinematic Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2023839173482142574",
    "prompt": "Action Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2020509883563166724",
    "prompt": "Nature Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2025945912669048864",
    "prompt": "Action Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023667777627144239",
    "prompt": "UGC Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023116908359599319",
    "prompt": "Action Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020512083731435057",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023764753408208923",
    "prompt": "Nature Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022966541313441371",
    "prompt": "Anime Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025467011004113040",
    "prompt": "Fashion Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2021246362465418774",
    "prompt": "UGC Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2022493244207961880",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2020811306581619674",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023854059533506299",
    "prompt": "Anime Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2022824844727311417",
    "prompt": "UGC Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2023785524161031755",
    "prompt": "Food Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2021287060954292573",
    "prompt": "UGC Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2021896142479134963",
    "prompt": "UGC Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2020533319242666944",
    "prompt": "Food Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2020695679597242016",
    "prompt": "Food Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2022488660352068046",
    "prompt": "Nature Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2024271366205638006",
    "prompt": "Horror Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2021781302961751126",
    "prompt": "Cinematic Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2022063176921535952",
    "prompt": "Cinematic Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023697190053841750",
    "prompt": "Action Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2024028200977283832",
    "prompt": "Fashion Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023201936713452010",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025391064699108595",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025161100864597480",
    "prompt": "Anime Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025858074515440064",
    "prompt": "Sci-fi Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024981704089813458",
    "prompt": "Nature Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2020659777404921145",
    "prompt": "UGC Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025114894504882182",
    "prompt": "Fashion Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2023472421059373342",
    "prompt": "Surreal Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2025585898306589593",
    "prompt": "Nature Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2024508479659269393",
    "prompt": "Fashion Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2020395041603181907",
    "prompt": "Nature Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2022797110377659421",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021848171272601139",
    "prompt": "Horror Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025326035203108567",
    "prompt": "Anime Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022571471098656258",
    "prompt": "Anime Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2025694308350703685",
    "prompt": "Anime Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2020201762250864340",
    "prompt": "UGC Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025629794792626034",
    "prompt": "Surreal Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2025123170200853525",
    "prompt": "Food Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2026879729906464390",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025257131102828284",
    "prompt": "Anime Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023573659861998656",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025801157675434913",
    "prompt": "Nature Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2024928037958355766",
    "prompt": "Surreal Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2022981559705686523",
    "prompt": "Action Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2023744459306570386",
    "prompt": "UGC Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2026578059426427970",
    "prompt": "Food Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023904623338894429",
    "prompt": "Anime Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2022641953254518622",
    "prompt": "Action Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2020082047855362040",
    "prompt": "Anime Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2021287137719005457",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2021725949577296208",
    "prompt": "Action Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2025121545273143162",
    "prompt": "Horror Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025529842900816384",
    "prompt": "Horror Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2024919722523938694",
    "prompt": "Sci-fi Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2022973683822319332",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2020005284481713050",
    "prompt": "Nature Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2022074638103047715",
    "prompt": "Fashion Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2024206821670740902",
    "prompt": "Surreal Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2023078254586321595",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2025237134057659552",
    "prompt": "Sci-fi Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026281786629436923",
    "prompt": "Horror Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026528850860435593",
    "prompt": "Anime Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2021349064395481165",
    "prompt": "Anime Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2022633234405843016",
    "prompt": "Cinematic Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2026317346732119886",
    "prompt": "Cinematic Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2022481350869200110",
    "prompt": "Food Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2024367169104410676",
    "prompt": "Horror Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026616371094657896",
    "prompt": "Fashion Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2022674172978063931",
    "prompt": "Sci-fi Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2024450469900623036",
    "prompt": "Nature Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023177703570838709",
    "prompt": "Sci-fi Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2026236107475062292",
    "prompt": "UGC Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025307057234506850",
    "prompt": "Sci-fi Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2024621677186231942",
    "prompt": "UGC Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2021636193439659357",
    "prompt": "Cinematic Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2023542407164079462",
    "prompt": "Nature Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026178497728443245",
    "prompt": "Food Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2025486141905866944",
    "prompt": "Surreal Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2021790632472072585",
    "prompt": "Fashion Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2023671482708830902",
    "prompt": "Food Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2024145762306983726",
    "prompt": "Horror Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025666896219284717",
    "prompt": "Cinematic Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2023634977505135652",
    "prompt": "Fashion Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2020599418248463944",
    "prompt": "Fashion Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2025724951329614616",
    "prompt": "Nature Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2021946929663547098",
    "prompt": "Sci-fi Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2022884417940089809",
    "prompt": "Food Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023040365687340776",
    "prompt": "Fashion Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2024317656542372844",
    "prompt": "Nature Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2025619773008820650",
    "prompt": "UGC Flying dragon generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2022595540065518966",
    "prompt": "Surreal Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2024252837416040627",
    "prompt": "Horror Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2025016600288045393",
    "prompt": "Anime Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2021155610099527897",
    "prompt": "UGC Steampunk machine generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2025654114210415972",
    "prompt": "Nature Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023198166039622716",
    "prompt": "Cinematic Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2021091654578742896",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2024951290912806796",
    "prompt": "Action Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2022737561554436439",
    "prompt": "Horror Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Soranlan/status/2020071497700260639",
    "prompt": "Horror Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2023898770977665256",
    "prompt": "Action Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2021463166224130245",
    "prompt": "Sci-fi Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2026461847255728219",
    "prompt": "Action Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/shikoba_86/status/2025732849641568487",
    "prompt": "Action Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2020394118719997814",
    "prompt": "Sci-fi Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/maxescu/status/2021362315997092553",
    "prompt": "Food Deep sea creature generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/heydin_ai/status/2023096881437456368",
    "prompt": "Action Space station generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2023108455149398581",
    "prompt": "UGC Dancing robot generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2022345878086847044",
    "prompt": "Horror Underwater palace generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2025331849459957920",
    "prompt": "Surreal Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Dheepanratnam/status/2025604536896834211",
    "prompt": "Cinematic Ancient warrior generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/aimikoda/status/2020688235106621782",
    "prompt": "Sci-fi Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/garyfung/status/2023833437050402322",
    "prompt": "Food Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/saniaspeaks_/status/2023372944923106324",
    "prompt": "Cinematic Magical forest generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/songguoxiansen/status/2024248906686737331",
    "prompt": "UGC Cyberpunk city generated with Seedance 2.0. High quality, realistic physics and lighting."
  },
  {
    "source": "X",
    "sourceUrl": "https://x.com/Anima_Labs/status/2020573962556811574",
    "prompt": "UGC Futuristic car generated with Seedance 2.0. High quality, realistic physics and lighting."
  }
];

export const seedancePrompts: SeedancePrompt[] = seedancePromptInputs.map((entry, index) => {
  const fallbackId = `${entry.source.toLowerCase()}-${index + 1}`;

  return {
    ...entry,
    id: entry.id ?? fallbackId,
    createdAt: entry.createdAt ?? DEFAULT_CREATED_AT,
  };
});
