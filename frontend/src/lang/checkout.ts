import LocalizedStrings from 'react-localization'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    BOOKING_HEADING: 'Réserver Maintenant',
    BOOKING_OPTIONS: 'Vos options de réservation',
    BOOKING_DETAILS: 'Vos données de réservation',
    DAYS: 'Jours',
    CAR: 'Voiture',
    SUPPLIER: 'Fournisseur',
    COST: 'Total',
    DRIVER_DETAILS: 'Informations du conducteur principal',
    EMAIL_INFO: 'Vous recevrez une confirmation à cette adresse.',
    PHONE_INFO: "Si nous avons besoin de vous contacter d'urgence.",
    PAYMENT: 'Paiement sécurisé',
    CARD_NUMBER: 'Numéro de carte',
    CARD_NUMBER_NOT_VALID: 'Numéro de carte non valide',
    CARD_EXPIRY_NOT_VALID: "Date d'expiration non valide",
    CVV_NOT_VALID: 'Code de sécurité non valide',
    BOOK: 'Réserver',
    SIGN_IN: 'Se connecter ?',
    SECURE_PAYMENT_INFO: 'Vos données sont protégées par le paiement sécurisé SSL.',
    SUCCESS: 'Votre paiement a été effectué avec succès. Nous vous avons envoyé un e-mail de confirmation.',
    PAY_LATER_SUCCESS: 'Votre réservation a été effectuée avec succès. Nous vous avons envoyé un e-mail de confirmation.',
    PAYMENT_OPTIONS: 'Options de paiement',
    PAY_LATER: 'Payer plus tard',
    PAY_LATER_INFO: 'Modification et annulation gratuites',
    PAY_ONLINE: 'Payer en ligne',
    PAY_ONLINE_INFO: 'Modification et annulation sous conditions',
    PAYMENT_FAILED: 'Paiement échoué.',
    CHECKING: 'Vérification en cours...',
    LICENSE_REQUIRED: 'Permis de conduire requis',
  },
  en: {
    BOOKING_HEADING: 'Book now',
    BOOKING_OPTIONS: 'Your booking options',
    BOOKING_DETAILS: 'Your booking details',
    DAYS: 'Days',
    CAR: 'Car',
    SUPPLIER: 'Supplier',
    COST: 'COST',
    DRIVER_DETAILS: 'Driver details',
    EMAIL_INFO: 'You will receive a confirmation email at this address.',
    PHONE_INFO: 'If we need to contact you urgently.',
    PAYMENT: 'Secure payment',
    CARD_NUMBER: 'Card Number',
    CARD_NUMBER_NOT_VALID: 'Invalid card number',
    CARD_EXPIRY_NOT_VALID: 'Invalid expiry date',
    CVV_NOT_VALID: 'Invalid Card Validation Code',
    BOOK: 'Book now',
    SIGN_IN: 'Sign in?',
    SECURE_PAYMENT_INFO: 'Your data is protected by SSL secure payment.',
    SUCCESS: 'Your payment was successfully done. We sent you a confirmation email.',
    PAY_LATER_SUCCESS: 'Your booking was successfully done. We sent you a confirmation email.',
    PAYMENT_OPTIONS: 'Payment options',
    PAY_LATER: 'Pay later',
    PAY_LATER_INFO: 'Free amendments and cancellation',
    PAY_ONLINE: 'Pay online',
    PAY_ONLINE_INFO: 'Amendments and cancellation under conditions',
    PAYMENT_FAILED: 'Payment failed.',
    CHECKING: 'Checking in progress...',
    LICENSE_REQUIRED: "Driver's license required"
  },
  es: {
    BOOKING_HEADING: 'Reservar ahora',
    BOOKING_OPTIONS: 'Tus opciones de reserva',
    BOOKING_DETAILS: 'Tus detalles de reserva',
    DAYS: 'Días',
    CAR: 'Coche',
    SUPPLIER: 'Proveedor',
    COST: 'Total',
    DRIVER_DETAILS: 'Detalles del conductor principal',
    EMAIL_INFO: 'Recibirás un correo de confirmación en esta dirección.',
    PHONE_INFO: 'Si necesitamos contactarte de urgencia.',
    PAYMENT: 'Pago seguro',
    CARD_NUMBER: 'Número de tarjeta',
    CARD_NUMBER_NOT_VALID: 'Número de tarjeta no válido',
    CARD_EXPIRY_NOT_VALID: 'Fecha de caducidad no válida',
    CVV_NOT_VALID: 'Código de seguridad no válido',
    BOOK: 'Reservar',
    SIGN_IN: '¿Iniciar sesión?',
    SECURE_PAYMENT_INFO: 'Tus datos están protegidos por un pago seguro SSL.',
    SUCCESS: 'Tu pago se realizó con éxito. Te hemos enviado un correo de confirmación.',
    PAY_LATER_SUCCESS: 'Tu reserva se ha realizado con éxito. Te hemos enviado un correo de confirmación.',
    PAYMENT_OPTIONS: 'Opciones de pago',
    PAY_LATER: 'Pagar más tarde',
    PAY_LATER_INFO: 'Modificaciones y cancelación gratuitas',
    PAY_ONLINE: 'Pagar en línea',
    PAY_ONLINE_INFO: 'Modificaciones y cancelación bajo condiciones',
    PAYMENT_FAILED: 'El pago falló.',
    CHECKING: 'Verificación en curso...',
    LICENSE_REQUIRED: 'Se requiere licencia de conducir',
  },
})

langHelper.setLanguage(strings)
export { strings }
