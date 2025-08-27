'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ApplyPage() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const step = searchParams.get('step')

        useEffect(() => {
        (async () => {
            if (!step) {
                router.push('/apply?step=1')
            }
        })()
    }, [router, step])
}