import { deleteMongoDB, deleteUser, fetchMongoDB } from "@/libs/action";
import connectDB from "@/libs/db";
import { User } from "@/libs/model";

async function fetchUsers() {
  //최신화 안 되면 캐시에 저장되어 버린 것
  return await (await fetch("http://localhost:4000/users")).json();
}

export default async function UserList() {
  //   const users = await fetchUsers();
  const users: any = await fetchMongoDB();
  console.log(users);

  return (
    <>
      <ul className="flex flex-col gap-4">
        {users.map((user: { id: string; name: string; email: string }) => (
          <li key={user.id} className="bg-white w-[300px] p-3 rounded-lg">
            <div>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <div className="flex gap-4">
                <form action={deleteMongoDB}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className="underline text-rose-500 justify-end">
                    삭제
                  </button>
                </form>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
