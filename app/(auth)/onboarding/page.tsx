import AccountProfile from "@/components/Form/AccountProfile";
import { subtitle, title } from "@/components/Shared/primitives";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 dark:rounded-md dark:border dark:border-orange-700">
      <div className="mt-4">
        {" "}
        <h1 className={title({ color: "yellow" })}>Começando sua jornada!</h1>
        <p className={subtitle()}>
          Que bom que você chegou até aqui. <br />
          Falta pouco para finalizar o seu cadastro!
        </p>
      </div>
      <section className="mt-9 bg-gray-100 dark:bg-slate-950 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
