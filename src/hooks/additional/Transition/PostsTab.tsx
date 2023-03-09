import { fetchData } from "./data"

// Note: this component is written using an experimental API
// that's not yet available in stable versions of React.

// For a realistic example you can follow today, try a framework
// that's integrated with Suspense, like Relay or Next.js.

function PostsTab() {
    const posts = use(fetchData("/posts"));
    return (
        <ul className="items">
            {posts.map((post: { id: number; title: string }) => (
                <Post key={post.id} title={post.title} />
            ))}
        </ul>
    );
}

function Post({ title }: { title: string }) {
    return <li className="item">{title}</li>;
}

export default PostsTab;

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise: any) {
    if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else if (promise.status === "pending") {
        throw promise;
    } else {
        promise.status = "pending";
        promise.then(
            (result: string) => {
                promise.status = "fulfilled";
                promise.value = result;
            },
            (reason: string) => {
                promise.status = "rejected";
                promise.reason = reason;
            }
        );
        throw promise;
    }
}
