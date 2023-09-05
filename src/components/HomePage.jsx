import { useState } from "react"
import { Link } from "react-router-dom";


export default function HomePage() {
    
    return (
        <main>
            <Link to="/all-articles">View all Articles</Link>
        </main>
    )
}