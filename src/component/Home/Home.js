import { useAuth } from "../../Context/authContext";

export function Home() {

    const { user, logout, loading } = useAuth();

    const handlLogOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error.message);
        };
    };

    if (loading) return <h1>Loading</h1>
    return (
        <div className="w-full max-w-xs m-auto text-black">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl mb-4">Desde Home {user.displayName || user.email}</h2>
                <button onClick={handlLogOut}
                    className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black">Logout</button>
            </div>
        </div>
    );
};