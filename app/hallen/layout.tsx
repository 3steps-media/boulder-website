import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HallenLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}