import { type Component, createResource, Suspense } from "solid-js";

export interface Quote {
  quote: string;
}

const Loading: Component = () => {
  return (
    <div class="text-center text-sm text-vanilla font-light px-12 py-4">
      Yükleniyor...
    </div>
  );
};

const Quote: Component = () => {
  const [quote] = createResource(async () => {
    const res = await fetch("https://ataturk.vercel.app/tr");
    if (!res.ok) {
      return { quote: "Beklenmeyen bir hata oluştu..." };
    }
    return (await res.json()) as Quote;
  });

  return (
    <Suspense fallback={<Loading />}>
      <div class="text-center text-sm px-12 py-4">
        <div class="text-vanilla font-medium">{quote()?.quote}</div>
        <div class="text-vanilla-300 font-semibold">Mustafa Kemal Atatürk</div>
      </div>
    </Suspense>
  );
};

export default Quote;
