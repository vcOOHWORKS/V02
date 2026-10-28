// Where the website's forms send their data. Both resolve immediately for now;
// replace the bodies with a Server Action or API call once the clinic chooses
// its booking system and mailing-list provider. The forms already show a
// "Sending…" state for as long as these promises take.

export type ConsultationRequest = {
  name: string;
  phone: string;
  concern: string;
  time?: string;
};

export async function submitConsultation(request: ConsultationRequest): Promise<void> {
  void request;
}

export async function subscribeToLetters(email: string): Promise<void> {
  void email;
}
