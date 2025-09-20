import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <a
        href="https://discord.com/oauth2/authorize?client_id=1418754272559890553&permissions=68608&integration_type=0&scope=bot+applications.commands"
        className="flex flex-col items-center gap-4"
      >
        <Image
          src="/yukan_logo.svg"
          alt="Yukanのロゴ、漢字の「夕」"
          width={124}
          height={124}
          className="rounded-md"
        />
        <h1 className="text-2xl font-bold">Yukanを使う</h1>
      </a>
    </main>
  );
}
