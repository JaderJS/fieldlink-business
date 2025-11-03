'use client'

import { motion } from "framer-motion"
import { SubHeader } from "./sub.header"
import { ElementType } from "react";

export function Section({ icon: Icon, title, text }: { icon?: ElementType, title: string, text: string | string[] }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 mt-20 max-w-5xl mx-auto text-center"
        >
            <SubHeader icon={Icon} title={title} />
            {Array.isArray(text) ? text.map((paragraph, index) => (
                <p key={index} className="mt-4 text-muted-foreground leading-relaxed text-justify">{paragraph}</p>
            )) : (
                <p className="mt-4 text-muted-foreground leading-relaxed">{text}</p>
            )}
        </motion.section>
    )
}