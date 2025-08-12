import React, { useState } from "react";

const patientData = {
    name: "Sarah Johnson",
    bloodGroup: "A+",
    phone: "+1 (555) 123-4567",
    bloodPressure: "120/80",
    insulinLevel: "Normal",
    lastTest: "Dec 15, 2024",
};

const allergies = [
    { name: "Penicillin", status: "severe", color: "bg-red-100 text-red-800" },
    { name: "Shellfish", status: "moderate", color: "bg-yellow-100 text-yellow-800" },
    { name: "Pollen", status: "mild", color: "bg-green-100 text-green-800" },
];

const testResults = [
    { test: "Blood Sugar", value: "95 mg/dL", date: "Dec 15, 2024", status: "normal" },
    { test: "Cholesterol", value: "180 mg/dL", date: "Dec 10, 2024", status: "normal" },
    { test: "Blood Pressure", value: "120/80", date: "Dec 15, 2024", status: "normal" },
];

const insulinData = [
    { time: "Morning", dose: "10 units", date: "Dec 15, 2024" },
    { time: "Afternoon", dose: "8 units", date: "Dec 15, 2024" },
    { time: "Evening", dose: "12 units", date: "Dec 14, 2024" },
];

export default function MediTrackDashboard() {
    const [activeSection, setActiveSection] = useState("overview");

    const renderMainContent = () => {
        switch (activeSection) {
            case "allergies":
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Allergy Information</h3>
                        <div className="space-y-3">
                            {allergies.map((allergy, idx) => (
                                <div key={idx} className="border border-gray-200 rounded p-4 flex justify-between items-center">
                                    <span className="font-medium text-gray-900">{allergy.name}</span>
                                    <span className={`px-2 py-1 rounded text-sm font-semibold ${allergy.color}`}>
                                        {allergy.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "tests":
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Test Results History</h3>
                        <div className="space-y-3">
                            {testResults.map((test, idx) => (
                                <div key={idx} className="border border-gray-200 rounded p-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-gray-900">{test.test}</span>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                                            {test.status}
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <p>Value: {test.value}</p>
                                        <p>Date: {test.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "insulin":
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Insulin Tracking</h3>
                        <div className="space-y-3">
                            {insulinData.map((entry, idx) => (
                                <div key={idx} className="border border-gray-200 rounded p-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-gray-900">{entry.time}</span>
                                        <span className="text-blue-600 font-medium">{entry.dose}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{entry.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Health Overview</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="border border-gray-200 rounded p-4">
                                <h4 className="font-medium text-gray-900 mb-2">Recent Vitals</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Blood Pressure:</span>
                                        <span className="font-medium text-green-600">{patientData.bloodPressure}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Insulin Level:</span>
                                        <span className="font-medium text-green-600">{patientData.insulinLevel}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Last Test:</span>
                                        <span className="font-medium">{patientData.lastTest}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded p-4">
                                <h4 className="font-medium text-gray-900 mb-2">Quick Stats</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="text-center p-3 bg-green-50 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">3</div>
                                        <div className="text-gray-600">Active Allergies</div>
                                    </div>
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600">12</div>
                                        <div className="text-gray-600">Tests This Month</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-6 py-4 flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">MediTrack</h1>
                <span className="ml-3 text-sm text-gray-500">Life without limits</span>
            </header>

            <div className="flex pt-16">
                {/* Left Sidebar */}
                <aside className="fixed left-0 top-16 bottom-0 w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto p-6">
                    {/* Patient Info */}
                    <div className="mb-6 border border-gray-200 rounded p-4">
                        <h2 className="text-lg font-semibold text-gray-900">{patientData.name}</h2>
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>Blood Group:</span>
                            <span>{patientData.bloodGroup}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <span>Phone:</span>
                            <span>{patientData.phone}</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-2">
                        {["overview", "allergies", "tests", "insulin"].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`w-full text-left px-3 py-2 rounded ${activeSection === section ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 ml-80 p-6 min-h-screen grid grid-cols-2 gap-6">{renderMainContent()}</main>
            </div>
        </div>
    );
}
