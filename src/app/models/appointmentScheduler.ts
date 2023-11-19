export class AppointmentScheduler {
    constructor(init?: Partial<AppointmentScheduler>) {
        Object.assign(this, init);
    }
    _id: string = ''; 
    client_name: string = ''; // Nombre del cliente
    phone_number: string = ''; // Número de teléfono del cliente
    email: string = ''; // Correo electrónico del cliente
    address: string = ''; // Dirección del cliente
    emergency_contact: string = ''; // Información de contacto de emergencia

    service_name: string = ''; // Nombre del servicio
    price: number = 0; // Precio del servicio
    description: string = ''; // Descripción del servicio
    category: number = 0; // Categoría del servicio

    appointment_date: Date = new Date(); // Fecha de la cita
    appointment_time: string = ''; // Hora de la cita

    payment_method: string = ''; // Método de pago
    payment_status: string = ''; // Estado del pago (pagado, pendiente, etc.)

    duration: number = 0; // Duración estimada de la cita en minutos
    recurrence: string = ''; // Recurrencia de la cita

    notification_preferences: string[] = []; // Preferencias de notificación del cliente

    created_at: Date = new Date(); // Fecha de creación de la cita
    updated_at: Date = new Date(); // Fecha de última actualización de la cita

}