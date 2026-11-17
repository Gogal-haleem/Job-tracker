import Image from "next/image";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Field, FieldLabel,FieldDescription} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
export default function Home() {
  return <>
    <div className="flex  flex-col bg-white min-h-screen">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-black mb-6 text-6xl font-bold leading-tight">
            A better way to track your job application
          </h1>
          <p className="text-muted-foreground text-xl">
            Capture,organize,and manage your job search in one place.
          </p>

          <div className="flex flex-col items-center gap-4">

            <Link href="/sign-up">
            <Button className="text-xl text-center  bg-destructive hover:cursor-pointer mt-[30px] w-[190px] h-[50px] ml-[8px]">Start for free
              <ArrowRight className="mx-[4px] size-[20px] mt-[5px]"/>
            </Button>
            </Link>
            <p className="text-[20px]">Free forever.No credit card required</p>
          </div>

          </div>
        </section>
      </main>

    </div>

   
  </>
}
