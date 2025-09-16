import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { SliderNavigation } from "./SliderNavigation";
import { useAccountController } from "./useAccountController";

export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 flex flex-col lg:p-10">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl font-bold tracking-[-1px] text-white">
            R$ 1000,00
          </strong>
          <button className="w-8 h-8 cursor-pointer flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className=" flex-1 flex flex-col justify-end mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.2 : 1.2}
            onSlideChange={(swiper) =>
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              })
            }
          >
            <div
              className="flex items-center justify-between mb-4"
              slot="container-start"
            >
              <strong className="text-white tracking-[-1px] text-lg font-bold">
                Minhas contas
              </strong>
              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>
            <SwiperSlide>
              <AccountCard
                balance={1000.24}
                name="Nubank"
                color="#7950F2"
                type="CHECKING"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                balance={1000.24}
                name="XP"
                color="#333"
                type="INVESTMENT"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                balance={1000.24}
                name="Carteira"
                color="#0f0"
                type="CASH"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
