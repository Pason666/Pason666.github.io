import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";
import { Blog } from "vuepress-theme-hope/blog";

export default defineClientConfig({
  enhance({ app, router }) {
    // 保留原有覆盖 heroBg 插槽的逻辑
    app.component("Blog", (props, { slots }) =>
      h(Blog, props, {
        ...slots,
        heroBg: () =>
          h("div", {
            style: {
              width: "100%",
              height: "100%",
              backgroundImage: `url("/images/forien.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
          }),
      })
    );

    if (typeof window !== "undefined") {
      // 定义我们想要的动画速度
      const TITLE_TRANSITION = "transform 1.8s ease-in-out 0.12s, opacity 1.8s ease-in-out 0.12s";
      const DESC_TRANSITION = "transform 1.8s ease-in-out 0.12s, opacity 1.8s ease-in-out 0.12s";

      const updateAnimationSpeed = () => {
        setTimeout(() => {
          const heroTitle = document.querySelector(".vp-blog-hero-title") as HTMLElement | null;
          const heroDesc = document.querySelector(".vp-blog-hero-description") as HTMLElement | null;

          const applyAndObserve = (el: HTMLElement | null, targetTransition: string) => {
            if (!el) return;

            // 首次应用我们的样式
            el.style.transition = targetTransition;
            console.log("设置样式为:", targetTransition);

            // 创建一个观察器，监听 style 属性的变化
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.attributeName === "style") {
                  // 如果 transition 被改回了 0.25s，我们就立刻改回来
                  if (el.style.transition.includes("0.25s")) {
                    console.log("检测到样式被覆盖，重新设置为:", targetTransition);
                    el.style.transition = targetTransition;
                  }
                }
              });
            });

            // 开始观察
            observer.observe(el, { attributes: true, attributeFilter: ["style"] });
          };

          applyAndObserve(heroTitle, TITLE_TRANSITION);
          applyAndObserve(heroDesc, DESC_TRANSITION);
        }, 500); // 稍微延长延迟时间，确保覆盖主题的初始设置
      };

      window.addEventListener("DOMContentLoaded", updateAnimationSpeed);
      router.afterEach(updateAnimationSpeed);
    }
  },
});