export const documentTypes = {
  resume: {
    label: 'Resume',
    fields: [
      { name: 'fullName', label: 'Full Name' },
      { name: 'email', label: 'Email' },
      { name: 'phone', label: 'Phone' },
      { name: 'experience', label: 'Work Experience' },
      { name: 'education', label: 'Education' },
      { name: 'skills', label: 'Skills' },
    ],
  },
  coverLetter: {
    label: 'Cover Letter',
    fields: [
      { name: 'fullName', label: 'Full Name' },
      { name: 'company', label: 'Company Name' },
      { name: 'position', label: 'Position' },
      { name: 'experience', label: 'Relevant Experience' },
      { name: 'motivation', label: 'Why This Role' },
    ],
  },
  businessProposal: {
    label: 'Business Proposal',
    fields: [
      { name: 'companyName', label: 'Company Name' },
      { name: 'projectName', label: 'Project Name' },
      { name: 'objective', label: 'Project Objective' },
      { name: 'scope', label: 'Project Scope' },
      { name: 'budget', label: 'Budget' },
      { name: 'timeline', label: 'Timeline' },
    ],
  },
  contract: {
    label: 'Contract',
    fields: [
      { name: 'partyOne', label: 'First Party' },
      { name: 'partyTwo', label: 'Second Party' },
      { name: 'purpose', label: 'Contract Purpose' },
      { name: 'terms', label: 'Key Terms' },
      { name: 'duration', label: 'Duration' },
      { name: 'payment', label: 'Payment Terms' },
    ],
  },
} as const;