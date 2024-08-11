import React from "react";

async function Page() {
  const res = await fetch("http://localhost:3000/api/users", {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });

  const { data } = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full gap-4 max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          All users&nbsp;
        </p>
        <ul className="flex gap-2">
          {data?.map((user) => (
            <li
              key={user.id}
              className="border rounded-lg py-3 px-3 hover:shadow-2xl cursor-pointer"
            >
              {user?.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Page;
