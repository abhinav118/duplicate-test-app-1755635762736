import { siteData, navigation } from '@/lib/data'

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
          <div className="card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Settings</h2>
            <p className="text-gray-600">Configure duplicate detection parameters</p>
          </div>
        </div>
    </div>
  )
}