"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, ChevronsRight, ChevronsLeft, User, FileText, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Tipos de consulta disponibles
const tiposConsulta = [
  {
    id: "primera",
    name: "Primera Consulta",
    description: "Evaluación completa para nuevos pacientes (60 min)",
    price: "$80",
  },
  {
    id: "seguimiento",
    name: "Consulta de Seguimiento",
    description: "Para pacientes actuales (30 min)",
    price: "$50",
  },
  {
    id: "online",
    name: "Consulta Online",
    description: "Consulta por videollamada (45 min)",
    price: "$65",
  },
]

// Especialistas disponibles
const especialistas = [
  {
    id: "dr-martinez",
    name: "Dr. Alejandro Martínez",
    specialty: "Medicina Natural",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "dra-gomez",
    name: "Dra. Laura Gómez",
    specialty: "Nutrición Holística",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "dr-ruiz",
    name: "Dr. Carlos Ruiz",
    specialty: "Terapias Naturales",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Horarios disponibles (simplificado)
const horariosDisponibles = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
]

export default function AgendarConsultaForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    tipoConsulta: "",
    especialista: "",
    fecha: undefined as Date | undefined,
    hora: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    motivoConsulta: "",
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (isStepComplete()) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarías la lógica de envío del formulario
    // Por ejemplo, llamar a una API para guardar la consulta
    setStep(5) // Avanzar al paso de confirmación
  }

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.tipoConsulta !== ""
      case 2:
        return formData.especialista !== ""
      case 3:
        return formData.fecha !== undefined && formData.hora !== ""
      case 4:
        return formData.nombre !== "" && formData.apellido !== "" && formData.email !== "" && formData.telefono !== ""
      default:
        return false
    }
  }

  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <FileText className="h-5 w-5" />
      case 2:
        return <User className="h-5 w-5" />
      case 3:
        return <CalendarIcon className="h-5 w-5" />
      case 4:
        return <FileText className="h-5 w-5" />
      default:
        return null
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">{getStepIcon(1)} Tipo de Consulta</h2>
            <RadioGroup
              value={formData.tipoConsulta}
              onValueChange={(value) => updateFormData("tipoConsulta", value)}
              className="space-y-4"
            >
              {tiposConsulta.map((tipo) => (
                <div key={tipo.id}>
                  <RadioGroupItem value={tipo.id} id={tipo.id} className="peer sr-only" />
                  <Label
                    htmlFor={tipo.id}
                    className="flex flex-col space-y-1 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">{tipo.name}</span>
                      <span className="font-semibold text-primary">{tipo.price}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{tipo.description}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              {getStepIcon(2)} Selección de Especialista
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {especialistas.map((especialista) => (
                <Card
                  key={especialista.id}
                  className={cn(
                    "cursor-pointer hover:border-primary transition-colors",
                    formData.especialista === especialista.id ? "border-primary" : "",
                  )}
                  onClick={() => updateFormData("especialista", especialista.id)}
                >
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3">
                      <img
                        src={especialista.image || "/placeholder.svg"}
                        alt={especialista.name}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium">{especialista.name}</h3>
                    <p className="text-sm text-primary">{especialista.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">{getStepIcon(3)} Fecha y Hora</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Selecciona una fecha</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.fecha && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.fecha ? (
                        format(formData.fecha, "PPP", { locale: es })
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.fecha}
                      onSelect={(date) => updateFormData("fecha", date)}
                      initialFocus
                      disabled={(date) => {
                        // Deshabilitar fechas anteriores a hoy y fines de semana
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        const day = date.getDay()
                        return date < today || day === 0 || day === 6
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Selecciona una hora</Label>
                <Select
                  value={formData.hora}
                  onValueChange={(value) => updateFormData("hora", value)}
                  disabled={!formData.fecha}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una hora" />
                  </SelectTrigger>
                  <SelectContent>
                    {horariosDisponibles.map((hora) => (
                      <SelectItem key={hora} value={hora}>
                        {hora}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!formData.fecha && (
                  <p className="text-sm text-muted-foreground">Por favor, selecciona una fecha primero</p>
                )}
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">{getStepIcon(4)} Información Personal</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => updateFormData("nombre", e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellido">Apellido</Label>
                <Input
                  id="apellido"
                  value={formData.apellido}
                  onChange={(e) => updateFormData("apellido", e.target.value)}
                  placeholder="Tu apellido"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  value={formData.telefono}
                  onChange={(e) => updateFormData("telefono", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="motivoConsulta">Motivo de la consulta</Label>
                <Textarea
                  id="motivoConsulta"
                  value={formData.motivoConsulta}
                  onChange={(e) => updateFormData("motivoConsulta", e.target.value)}
                  placeholder="Describe brevemente el motivo de tu consulta"
                  rows={4}
                />
              </div>
            </div>
          </div>
        )
      case 5:
        // Paso de confirmación
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">¡Consulta Agendada!</h2>
                <p className="text-muted-foreground">Hemos recibido tu solicitud de cita.</p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Detalles de tu consulta</h3>
                <div className="text-sm space-y-1">
                  <p>
                    <span className="font-semibold">Tipo de consulta:</span>{" "}
                    {tiposConsulta.find((t) => t.id === formData.tipoConsulta)?.name}
                  </p>
                  <p>
                    <span className="font-semibold">Especialista:</span>{" "}
                    {especialistas.find((e) => e.id === formData.especialista)?.name}
                  </p>
                  <p>
                    <span className="font-semibold">Fecha y hora:</span>{" "}
                    {formData.fecha ? `${format(formData.fecha, "PPP", { locale: es })} a las ${formData.hora}` : "-"}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Información personal</h3>
                <div className="text-sm space-y-1">
                  <p>
                    <span className="font-semibold">Nombre:</span> {formData.nombre} {formData.apellido}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {formData.email}
                  </p>
                  <p>
                    <span className="font-semibold">Teléfono:</span> {formData.telefono}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Hemos enviado una confirmación a tu correo electrónico. Un miembro de nuestro equipo se pondrá en
                contacto contigo en caso de ser necesario confirmar algún detalle adicional.
              </p>
            </div>

            <div className="pt-2">
              <Button onClick={() => (window.location.href = "/")} className="w-full sm:w-auto">
                Volver al Inicio
              </Button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const renderProgressIndicator = () => {
    if (step === 5) return null // No mostrar en el paso de confirmación

    return (
      <div className="mb-8">
        <div className="flex justify-between">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={cn(
                "flex flex-col items-center space-y-2",
                stepNumber <= step ? "text-primary" : "text-muted-foreground",
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center border-2",
                  stepNumber <= step
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted bg-background",
                )}
              >
                {stepNumber}
              </div>
              <span className="text-xs font-medium hidden sm:block">
                {stepNumber === 1
                  ? "Tipo"
                  : stepNumber === 2
                    ? "Especialista"
                    : stepNumber === 3
                      ? "Fecha/Hora"
                      : "Datos"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${Math.max(0, ((step - 1) / 3) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {renderProgressIndicator()}
      {renderStepContent()}

      <div className="flex justify-between mt-8">
        {step > 1 && step < 5 && (
          <Button type="button" variant="outline" onClick={handlePrevious} className="gap-2">
            <ChevronsLeft className="h-4 w-4" /> Anterior
          </Button>
        )}

        {step < 4 ? (
          <Button type="button" onClick={handleNext} disabled={!isStepComplete()} className="ml-auto gap-2">
            Siguiente <ChevronsRight className="h-4 w-4" />
          </Button>
        ) : step === 4 ? (
          <Button type="submit" disabled={!isStepComplete()} className="ml-auto">
            Agendar Consulta
          </Button>
        ) : null}
      </div>
    </form>
  )
}

