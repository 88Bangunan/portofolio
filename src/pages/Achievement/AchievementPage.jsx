import { useContext, useEffect, useState } from "react";
import { AchievementContext } from "../../context/AchievementContext";
import { ScrollFadeUp } from "../../components/ScrollFadeUp";
import { Link } from "react-router";

function AchievementPage() {
  const { achievements } = useContext(AchievementContext);

  const [achievementFilter, setAchievementFilter] = useState("");
  const [achievementsFiltered, setAchievementsFiltered] = useState([]);

  useEffect(() => {
    if (achievementFilter.trim().length <= 0) {
      return setAchievementsFiltered([]);
    }

    setAchievementsFiltered(
      achievements.filter(
        (achievement) => achievement.category === achievementFilter,
      ),
    );
  }, [achievementFilter]);

  return (
    <div className="achievement-lists-container flex flex-col gap-y-5 pb-27 box-border">
      <div className="achievement-heading flex flex-col gap-y-5">
        <ScrollFadeUp>
          <span className="text-[11.5px] tracking-[3.5px] text-gray-200/70 uppercase">
            ACHIEVEMENTS
          </span>
        </ScrollFadeUp>
        <ScrollFadeUp>
          <span className="text-5xl text-white tracking-tight font-bold sm:text-6xl lg:text-7xl capitalize">
            Selected Achievements
          </span>
        </ScrollFadeUp>
        <ScrollFadeUp>
          <p className="text-gray-100/80 leading-6 text-[15.5px] sm:text-lg lg:text-xl lg:w-3/4">
            Full-stack applications, data architecture, responsive interfaces,
            and e-commerce optimization — a comprehensive archive of client work
            and digital experiments.
          </p>
        </ScrollFadeUp>
      </div>
      <div className="filter-container flex flex-col gap-y-4">
        <ScrollFadeUp>
          <div className="grid grid-cols-2 gap-3 justify-center md:grid-cols-3 md:w-12/13 lg:w-7/8 xl:w-3/4">
            {[
              "Achievements",
              "Technical Certifications",
              "Courses & Training",
            ].map((category, index) => (
              <div
                key={category.id}
                className={`rounded-full p-3 box-border flex justify-center items-center text-center hover:bg-gray-700/50 hover:border-gray-100/70 cursor-pointer transition duration-500 ease-in-out grayscale ${achievementFilter === category ? "bg-gray-700/80 border border-gray-100/20" : "bg-gray-900/80 border border-gray-200/10"}`}
                onClick={() => setAchievementFilter(category)}
              >
                <span className="text-white tracking-tight text-sm">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </ScrollFadeUp>
        <ScrollFadeUp>
          <div className="reset-category-button w-3/8 mx-auto md:w-2/10 lg:w-2/13 xl:w-2/15">
            <button
              className="bg-white text-black rounded-full p-3 box-border cursor-pointer hover:bg-gray-100/90 font-medium transition duration-300 ease-in-out w-full"
              onClick={() => setAchievementFilter("")}
            >
              Reset Filter
            </button>
          </div>
        </ScrollFadeUp>
        <ScrollFadeUp>
          <div className="total-achievements-text">
            {achievementsFiltered.length > 0 ? (
              <span className="text-[12.5px] text-gray-200/70 tracking-[3.5px] uppercase">
                {achievementsFiltered.length} achievements
              </span>
            ) : (
              <span className="text-[12.5px] text-gray-200/70 tracking-[3.5px] uppercase">
                {achievements.length} achievements
              </span>
            )}
          </div>
        </ScrollFadeUp>
      </div>

      <div className="achievement-content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 lg:gap-8">
        {achievementsFiltered.length > 0 ? (
          <>
            {achievementsFiltered.map((achievement) => (
              <Link
                key={achievement.id}
                to={`/achievement/${achievement.slug}`}
              >
                <ScrollFadeUp>
                  <div className="border border-gray-300/50 rounded-2xl overflow-hidden animate-slideDown hover:animate-slideUp transition duraton-500 ease-in-out cursor-pointer">
                    <div className="relative">
                      <iframe
                        className="w-full h-73.5 xl:h-122.5 border-0 rounded-t-2xl"
                        src={achievement.source}
                        title={achievement.title}
                        allow="fullscreen"
                        allowFullScreen
                        scrolling="no"
                      ></iframe>
                      <a href={achievement.source} target="_blank">
                        <div className="w-5 h-5 absolute top-6/7 right-5 bg-gray-500 cursor-pointer">
                          <div className="flex justify-center items-center h-5">
                            <div className="w-3 h-3 border border-gray-300"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="certificates-achievements-information-container py-3 px-5 box-border flex flex-col gap-y-3">
                      <ScrollFadeUp>
                        <span className="category text-[13.5px] text-gray-400/80 font-medium tracking-[3.5px]">
                          {achievement.category}
                        </span>
                      </ScrollFadeUp>
                      <div className="flex items-center justify-between">
                        <ScrollFadeUp>
                          <span className="text-white font-semibold text-lg tracking-tighter">
                            {achievement.title}
                          </span>
                        </ScrollFadeUp>
                        <ScrollFadeUp>
                          <span className="text-[13.5px] text-gray-400/80 font-medium tracking-wide">
                            {achievement.year}
                          </span>
                        </ScrollFadeUp>
                      </div>
                      <ScrollFadeUp>
                        <div className="text-gray-200/50 font-medium leading-6 line-clamp-3">
                          {achievement.description[0].text}
                        </div>
                      </ScrollFadeUp>
                    </div>
                  </div>
                </ScrollFadeUp>
              </Link>
            ))}
          </>
        ) : (
          <>
            {achievements.length > 0 &&
              achievements.map((achievement) => (
                <Link
                  key={achievement.id}
                  to={`/achievement/${achievement.slug}`}
                >
                  <ScrollFadeUp>
                    <div className="border border-gray-300/50 rounded-2xl overflow-hidden animate-slideDown hover:animate-slideUp transition duraton-500 ease-in-out cursor-pointer">
                      <div className="relative">
                        <iframe
                          className="w-full h-73.5 xl:h-122.5 border-0 rounded-t-2xl"
                          src={achievement.source}
                          title={achievement.title}
                          allow="fullscreen"
                          allowFullScreen
                          scrolling="no"
                        ></iframe>
                        <a href={achievement.source} target="_blank">
                          <div className="w-5 h-5 absolute top-6/7 right-5 bg-gray-500 cursor-pointer">
                            <div className="flex justify-center items-center h-5">
                              <div className="w-3 h-3 border border-gray-300"></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="certificates-achievements-information-container py-3 px-5 box-border flex flex-col gap-y-3">
                        <ScrollFadeUp>
                          <span className="category text-[13.5px] text-gray-400/80 font-medium tracking-[3.5px]">
                            {achievement.category}
                          </span>
                        </ScrollFadeUp>
                        <div className="flex items-center justify-between">
                          <ScrollFadeUp>
                            <span className="text-white font-semibold text-lg tracking-tighter">
                              {achievement.title}
                            </span>
                          </ScrollFadeUp>
                          <ScrollFadeUp>
                            <span className="text-[13.5px] text-gray-400/80 font-medium tracking-wide">
                              {achievement.year}
                            </span>
                          </ScrollFadeUp>
                        </div>
                        <ScrollFadeUp>
                          <div className="text-gray-200/50 font-medium leading-6 line-clamp-3">
                            {achievement.description[0].text}
                          </div>
                        </ScrollFadeUp>
                      </div>
                    </div>
                  </ScrollFadeUp>
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default AchievementPage;
