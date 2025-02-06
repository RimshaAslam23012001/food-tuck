export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  "ghcdxybv",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skDt8cNjcGvOowZR2HdJYQmDM9HYx0UY9FLZJhLsSrFIUzQCHjp0AqMck2jcckn7KpYsKJDT1yR3egLzd67bvD0Be9IBUkKSRLayG1wofTZ0TmDoO83xanMeBH01rLlhNDSZQf8HbMi53S8RkA4Nk9SBsy60Nsn1ykDb0uYsg9AbA48qqEeB",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
