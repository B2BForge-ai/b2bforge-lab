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
          <strong>{site.domain}</strong> 是挂在出海域上的公开实验室：记录出海
          B2B SaaS 如何从零做市场——真实动作、数字、失败，以及可复用规则。
        </p>
        <p>
          第一个公开样本是活动管理产品{" "}
          <a href={site.sampleUrl}>{site.sampleName}</a>
          。Lab 讲方法，产品站卖软件；方法将逐步产品化回 MarketUP / B2B Forge。
        </p>
        <h2>不是什么</h2>
        <p>不是另一个独立公司，也不是 BagEvent 的博客镜像。</p>
      </div>
    </>
  );
}
