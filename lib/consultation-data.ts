export const consultationServices = [
  {
    id: 'school-improvement-advisory',
    title: 'School Improvement Advisory',
    description:
      'Support for school systems, leadership structures, accountability, and sustainable improvement planning.',
  },
  {
    id: 'teacher-training-professional-development',
    title: 'Teacher Training & Professional Development',
    description:
      'Workshops and coaching focused on instructional quality, classroom effectiveness, and educational innovation.',
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    description:
      'Support for principals, coordinators, middle leaders, and aspiring educational leaders.',
  },
  {
    id: 'accreditation-quality-assurance',
    title: 'Accreditation & Quality Assurance',
    description:
      'Guidance for accreditation readiness, evidence collection, quality systems, and review preparation.',
  },
  {
    id: 'academic-excellence-curriculum-support',
    title: 'Academic Excellence & Curriculum Support',
    description:
      'Support for curriculum alignment, assessment systems, and academic planning.',
  },
  {
    id: 'general-consultation',
    title: 'General Consultation',
    description:
      'For schools, educators, institutions, or organizations seeking strategic educational guidance.',
  },
] as const;

export const consultationMeetingModes = [
  'Google Meet',
  'Zoom',
  'Phone Call',
  'In-Person (Jaipur)',
] as const;

export const consultationTimeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
] as const;

export const consultationStatuses = [
  'Pending',
  'Confirmed',
  'Completed',
  'Cancelled',
] as const;

export const consultationServiceIds = consultationServices.map((service) => service.id) as [
  (typeof consultationServices)[number]['id'],
  ...((typeof consultationServices)[number]['id'])[],
];

export type ConsultationService = (typeof consultationServices)[number];
export type ConsultationMeetingMode = (typeof consultationMeetingModes)[number];
export type ConsultationTimeSlot = (typeof consultationTimeSlots)[number];
export type ConsultationStatus = (typeof consultationStatuses)[number];
