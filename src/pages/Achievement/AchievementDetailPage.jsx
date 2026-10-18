import { useContext } from "react";
import { Link, useParams } from "react-router";
import { AchievementContext } from "../../context/AchievementContext";
import { FaArrowLeft } from "react-icons/fa";

function AchievementDetailPage() {
  const { slug } = useParams();

  const { achievements } = useContext(AchievementContext);
  const achievement = achievements.find(
    (achievement) => achievement.slug === slug,
  );

  return (
    <div className="pb-30 box-border">
      <div className="flex flex-col gap-y-5">
        <Link
          to="/"
          className="flex items-center gap-x-2 text-gray-200/70 font-medium"
        >
          <FaArrowLeft />
          <span className="text-[14.5px]">All achievements</span>
        </Link>
        {achievement && Object.keys(achievement).length > 0 ? (
          <>
            <div className="achievement-detail-heading flex flex-col gap-y-5 lg:gap-y-8 xl:gap-y-10 py-5 box-border">
              <span className="text-gray-200/70 tracking-[3.5px] text-[14.5px]">
                {achievement.category} • {achievement.year}
              </span>
              <span className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-white font-bold">
                {achievement.title}
              </span>
              <div className="border border-gray-300/20 bg-gray-900/90 overflow-hidden rounded-2xl grayscale grid grid-cols-2 gap-1">
                <div className="bg-gray-800/50 p-3 sm:p-5 box-border">
                  <span className="text-[11.5px] text-gray-200/70 tracking-[3.5px] uppercase">
                    Issuer
                  </span>
                  <span className="text-[15.5px] pt-2 box-border text-white block">
                    {achievement.issuer}
                  </span>
                </div>
                <div className="bg-gray-800/50 p-3 sm:p-5 box-border">
                  <span className="text-[11.5px] text-gray-200/70 tracking-[3.5px] uppercase">
                    YEAR
                  </span>
                  <span className="text-[15.5px] pt-2 box-border text-white block">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>
            <div className="achievement-information-container flex flex-col rounded-2xl overflow-hidden">
              <iframe
                src={achievement.source}
                alt=""
                className="w-full h-73.5 xl:h-183.5 border-0 rounded-t-2xl object-cover"
              />
              <div className="achievement-description flex flex-col gap-y-3 p-8 box-border bg-gray-800/50 grayscale">
                {achievement.description.map((desc, index) => (
                  <div
                    key={`description-${index + 1}`}
                    className="flex flex-col gap-y-2"
                  >
                    <span className="text-lg text-white font-medium">
                      {desc.subtitle}
                    </span>
                    <p className="text-gray-100/70 text-[13.5px] md:text-[14.5px]">
                      {desc.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-y-5">
            <span className="text-gray-200/70 text-[13.5px] tracking-[3.5px]">
              404
            </span>
            <span className="text-4xl text-white font-bold">
              This achievement doesn't exist(yet).
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AchievementDetailPage;
