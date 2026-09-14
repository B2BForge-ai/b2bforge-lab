import { site } from "@/lib/site";

export const metadata = {
  title: "关于",
};

export default function AboutPage() {
  return (
    <>
      <p className="eyebrow">About</p>
      <h1>Forge Lab 是什么</h1>
      <div className="prose">
        <p>
          <strong>MarketUP.cn</strong> 是国内产品；
          <strong> b2bforge.ai</strong> 是它的出海产品域（品牌 B2B Forge）。
        </p>
        <p>
          <strong>{site.domain}</strong>{" "}
          只公开记录出海 B2B SaaS 做市场的过程：按天写目标、动作、结果、失败和可复用规则。第一个样本是{" "}
          <a href={site.sampleUrl}>{site.sampleName}</a>。
        </p>
        <p>这里没有演示文案。做了什么就写什么；敏感数字默认脱敏。</p>
      </div>
    </>
  );
}
