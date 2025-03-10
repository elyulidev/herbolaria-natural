import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Paciente",
      content:
        "Los productos naturales recomendados por el Dr. Martínez cambiaron mi vida. Después de meses de problemas digestivos, finalmente encontré alivio.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Paciente",
      content:
        "Increíble atención personalizada. El doctor realmente se toma el tiempo para entender tus necesidades y recomendar los mejores productos naturales.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 3,
      name: "Laura Sánchez",
      role: "Paciente",
      content:
        "Llevo 6 meses usando los suplementos recomendados y mi energía ha mejorado notablemente. Recomiendo esta clínica a todos mis amigos.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
  ]

  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Historias reales de personas que han mejorado su salud con nuestros productos y servicios
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  {Array(5 - testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-muted-foreground" />
                    ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex items-center space-x-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

