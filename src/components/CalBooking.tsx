import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'dat-lich' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        theme: 'light',
      });
    })();
  }, []);

  return (
    <section
      aria-label="Đặt lịch trực tuyến"
      className="bg-[#F8F5F0] py-12 md:py-20"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mx-auto mb-10 max-w-[620px] text-center md:mb-14">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#75656A]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Đặt Lịch Trực Tuyến
          </span>
          <h2
            className="mt-5 text-[clamp(1.75rem,3.5vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#34282D]"
          >
            <span className="block">Chọn ngày & giờ hẹn</span>
            <span
              className="mt-2 block font-display font-normal italic tracking-[-0.045em] text-[#75656A]"
            >
              Lịch của bạn, theo cách của bạn
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-[920px] rounded-2xl border border-[#34282D]/10 bg-white/55 p-4 shadow-[0_2px_12px_rgba(52,40,45,0.06)] md:p-8">
          <div
            className="cal-embed-wrapper"
            style={{ width: '100%', height: 'clamp(520px, 70vh, 760px)', overflow: 'auto' }}
          >
            <Cal
              namespace="dat-lich"
              calLink="daile1512/dat-lich"
              style={{ width: '100%', height: '100%', minHeight: '520px' }}
              config={{
                layout: 'month_view',
                useSlotsViewOnSmallScreen: 'true',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
