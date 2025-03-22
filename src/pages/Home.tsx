import { AutoTextSize } from "auto-text-size";
import HomeDescription from "./HomeDescription.mdx";

export const Home = () => {
    return (
        <div class="w-full h-full flex flex-col">
            <div class="w-full flex flex-row flex-wrap items-start bg-red-700 p-8 md:p-12 gap-8 overflow-clip">
                <h1
                    class="w-0 grow min-w-3/5 font-bold flex flex-col select-none text-white"
                    style={{
                        lineHeight: "0.8",
                    }}
                >
                    <AutoTextSize maxFontSizePx={Infinity}>NMNM</AutoTextSize>
                    <AutoTextSize maxFontSizePx={Infinity}>
                        .CC
                        <a
                            class="text-red-600! relative inline-block h-full max-h-full"
                            href="https://github.com/NMNMCC"
                        >
                            <div class="absolute flex items-center justify-center w-full h-full aspect-square top-0 left-0 pt-[10%]">
                                <img
                                    alt="Avatar"
                                    src="https://github.com/NMNMCC.png"
                                    class="rounded-full object-cover transform-gpu transition-all hover:scale-150"
                                ></img>
                            </div>
                            &nbsp;
                        </a>
                    </AutoTextSize>
                </h1>
                <div
                    class={`w-full xl:w-0 xl:grow min-h-fit md:p-4  overflow-x-clip overflow-y-auto prose **:text-white`}
                    style={{
                        scrollbarWidth: "none",
                    }}
                >
                    <HomeDescription />
                </div>
            </div>
        </div>
    );
};
