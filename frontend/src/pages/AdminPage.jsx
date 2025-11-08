import { useState } from "react";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    event_name: "",
    event_category: "",
    venue: "",
    description: "",
    bg_image_url: "",
    rulebook: "",
    rules: "",
    coordinator_names: "",
    coordinator_phone: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const newEvent = {
      ...form,
      bg_image_url: form.bg_image_url || "",
      rulebook: form.rulebook || "",
      rules: form.rules ? form.rules.split(",") : [],
      coordinator_names: form.coordinator_names ? form.coordinator_names.split(",") : [],
      coordinator_phone: form.coordinator_phone ? form.coordinator_phone.split(",") : [],
    };

    if (editIndex !== null) {
      const updated = [...events];
      updated[editIndex] = newEvent;
      setEvents(updated);
      setEditIndex(null);
    } else {
      setEvents([...events, newEvent]);
    }

    setForm({
      event_name: "",
      event_category: "",
      venue: "",
      description: "",
      bg_image_url: "",
      rulebook: "",
      rules: "",
      coordinator_names: "",
      coordinator_phone: "",
    });
  }

  function handleEdit(index) {
    const ev = events[index];
    setForm({
      event_name: ev.event_name,
      event_category: ev.event_category,
      venue: ev.venue,
      description: ev.description,
      bg_image_url: ev.bg_image_url,
      rulebook: ev.rulebook,
      rules: ev.rules.join(","),
      coordinator_names: ev.coordinator_names.join(","),
      coordinator_phone: ev.coordinator_phone.join(","),
    });
    setEditIndex(index);
  }

  function handleDelete(index) {
    setEvents(events.filter((_, i) => i !== index));
  }

  function handleLogout() {
    alert("Logged out! (Here you can add real logout logic)");
  }

  return (
    <div className="relative p-8 text-white font-sans bg-[#802C00] min-h-screen">

      {/* ✅ ADMIN PROFILE + LOGOUT */}
      <div className="absolute top-5 right-5 flex items-center gap-4 bg-[#2b2b2b] px-5 py-2 rounded-full border border-[#FED000] shadow-lg">
        <img
          src="https://i.pravatar.cc/60"
          alt="Admin"
          className="w-10 h-10 rounded-full border-2 border-[#FED000]"
        />

        <p className="font-bold text-[#FED000] text-lg">Admin Panel</p>

        <button
          onClick={handleLogout}
          className="bg-[#FED000] text-black px-3 py-1 rounded font-bold hover:bg-yellow-400 transition"
        >
          Logout
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">
        Admin Event Manager
      </h2>

      <div className="flex gap-10">

        {/* ✅ Event Form */}
        <div className="flex flex-col bg-[#2b2b2b] p-6 rounded-lg w-[420px] border-2 border-[#FED000]">
          {[
            "event_name",
            "event_category",
            "venue",
            "description",
            "bg_image_url",
            "rulebook",
            "rules",
            "coordinator_names",
            "coordinator_phone",
          ].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={form[field]}
              placeholder={field.replace(/_/g, " ").toUpperCase()}
              onChange={handleChange}
              className="p-2 bg-[#3a3a3a] border border-gray-600 rounded w-full my-2"
            />
          ))}

          <button
            onClick={handleSubmit}
            className="bg-yellow-500 text-black p-2 rounded font-bold mt-3"
          >
            {editIndex !== null ? "Update Event" : "Add Event"}
          </button>
        </div>

        {/* ✅ Events List */}
        <div className="flex-1">
          <h3 className="text-2xl mb-4 font-semibold">All Events</h3>

          {events.length === 0 && (
            <p className="text-gray-300">No events added yet.</p>
          )}

          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {events.map((ev, index) => (
              <div
                key={index}
                className="bg-[#2b2b2b] p-4 rounded flex justify-between items-center border border-[#FED000]"
              >
                <div>
                  <p><strong>Name:</strong> {ev.event_name}</p>
                  <p><strong>Category:</strong> {ev.event_category}</p>
                  <p><strong>Venue:</strong> {ev.venue}</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-400 px-3 py-1 rounded text-black font-bold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 px-3 py-1 rounded text-black font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
