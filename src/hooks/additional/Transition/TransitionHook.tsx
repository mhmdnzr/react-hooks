import { Suspense, useState } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

function TransitionHook() {
    const [tab, setTab] = useState<string>("about");
    return (
        <Suspense fallback={<h1>🌀 Loading...</h1>}>
            <TabButton
                isActive={tab === "about"}
                onClick={async () => setTab("about")}
            >
                About
            </TabButton>
            <TabButton
                isActive={tab === "posts"}
                onClick={async () => setTab("posts")}
            >
                Posts
            </TabButton>
            <TabButton
                isActive={tab === "contact"}
                onClick={async () => setTab("contact")}
            >
                Contact
            </TabButton>
            <hr />
            {tab === "about" && <AboutTab />}
            {tab === "posts" && <PostsTab />}
            {tab === "contact" && <ContactTab />}
        </Suspense>
    );
}
export { TransitionHook };
