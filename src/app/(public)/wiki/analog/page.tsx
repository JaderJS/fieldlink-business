'use client'

import { BannerComponent, BannerContent, BannerProvider } from "@/src/components/custom/global/parallax.banner/parallax.banner";
import { TextEffect } from "@/src/components/motion.primitives/text.effect";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { TYPOGRAPHY } from "@/src/constants/typography"
import { StaticImageData } from "next/image";
import { motion } from 'framer-motion'

import { cn } from "@/src/lib/utils";
import { Header } from "@/src/components/custom/global/nav/navbar";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/src/components/ui/item";
import { Blocks } from "lucide-react";
import { CallToAction } from "@/src/components/custom/global/cta/cta";
import { Footer } from "@/src/components/custom/global/footer/footer";

export default function PageWikiAnalog() {


    const { intro, features, useCases } = TYPOGRAPHY.analog

    const classNameSection = `md:px-16 lg:px-44 p-12 lg:p-32`

    return (
        <>
            <Header />

            {/* Intro */}
            <Banner title={intro.banner.text} description={intro.banner.description} src={intro.banner.src} />
            <Section
                title={intro.title}
                text={intro.overview}
                icon={intro.icon}
            />

            {/* Features */}
            <Banner
                title={features.banner.title}
                description={features.banner.subtitle}
                src={features.banner.src}
                className="mt-12"
            />

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="px-6 md:px-12 mt-20 pb-12"
            >
                <SubHeader icon={Blocks} title={"Features"} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {features.itens.map(({ icon: Icon, text, description }, index) => (
                        <Item key={index} variant={'outline'} className='hover:scale-103 transition-all'>
                            <ItemMedia>
                                <Icon className='size-18 text-secondary' />
                            </ItemMedia>
                            <ItemContent className='gap-1'>
                                <ItemTitle className='text-lg font-semibold'>{text}</ItemTitle>
                                <ItemDescription>{description}</ItemDescription>
                            </ItemContent>
                        </Item>
                    ))}
                </div>
            </motion.section>

            {/* Use Cases */}
            <Banner
                title={useCases.banner.title}
                description={useCases.banner.subtitle}
                src={useCases.banner.src}
                className="mt-12"
            />

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="px-6 md:px-12 mt-20 pb-12"
            >
                <SubHeader icon={Blocks} title={"Casos de uso"} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {features.itens.map(({ icon: Icon, text, description }, index) => (
                        <Item key={index} variant={'outline'} className='hover:scale-103 transition-all'>
                            <ItemMedia>
                                <Icon className='size-18 text-secondary' />
                            </ItemMedia>
                            <ItemContent className='gap-1'>
                                <ItemTitle className='text-lg font-semibold'>{text}</ItemTitle>
                                <ItemDescription>{description}</ItemDescription>
                            </ItemContent>
                        </Item>
                    ))}
                </div>
            </motion.section>

            {/* Call to action */}
            <CallToAction />

            {/* Footer */}
            <Footer />
        </>
    )
}

function Banner({ title, description, src, className }: { title: string, description?: string, src: StaticImageData | string, className?: string }) {
    return (
        <BannerComponent src={src} className={className}>
            <BannerContent className={cn("relative flex items-center justify-center py-20")}>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-b from-black/45 via-black/25 to-black/45 backdrop-blur-sm"
                />
                <div className="relative z-10 max-w-3xl px-4 text-center">
                    <TextEffect
                        as="h1"
                        per="char"
                        preset="fade"
                        delay={typeof window !== 'undefined' &&
                            window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.08}
                        speedReveal={1.1}
                        className="text-white/90 font-bold tracking-tight leading-tight
                text-4xl sm:text-5xl md:text-6xl lg:text-8xl
                drop-shadow-2xl"
                        style={{ WebkitFontSmoothing: 'antialiased' }}
                    >
                        {title}
                    </TextEffect>

                    {description && <TextEffect
                        as="p"
                        per="line"
                        preset="slide"
                        delay={typeof window !== 'undefined' &&
                            window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.28}
                        className="mt-4 text-white font-semibold text-base sm:text-lg md:text-xl leading-relaxed
                max-w-2xl mx-auto"
                    >
                        {description}
                    </TextEffect>}
                </div>
            </BannerContent>
        </BannerComponent>
    )
}

function Section({ icon: Icon, title, text, className }: { icon?: any, title: string, text: string | string[], className?: string }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("px-6 md:px-12 mt-20 max-w-5xl mx-auto text-center", className)}
        >
            <SubHeader icon={Icon} title={title} />
            {Array.isArray(text) ? text.map((paragraph, index) => (
                <p key={index} className="mt-4 leading-relaxed text-justify">{paragraph}</p>
            )) : <>
                <p className="mt-4 leading-relaxed">{text}</p>
            </>}
        </motion.section>
    )
}

function SubHeader({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            <div className="bg-secondary/10 p-3 rounded-full">
                <Icon className="text-secondary size-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold antialiased">
                {title}
            </h2>
        </div>
    )
}