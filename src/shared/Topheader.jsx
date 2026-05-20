function Topheader() {
  return (
    <div
      className="

      bg-white

      p-4

      rounded-2xl

      shadow

      flex flex-col sm:flex-row

      sm:justify-between

      sm:items-center

      gap-4

      "
    >

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800">

        Dashboard

      </h1>

      {/* PROFILE */}
      <div className="flex items-center gap-3">

        <img
          src="https://imgs.search.brave.com/OpbbSPZD14-aVE7MlUQDBUBAPlpS04udkFCBMt7jnDo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRpYS5nZXR0eWltYWdlcy5jb20vaWQvMjE5MjIyMjExMi92ZWN0b3IvcHJvZmlsZS1hdmF0YXItb2YtYmVhcmQtbWFuLXdlYXJpbmctc3VuZ2xhc3Nlcy5qcGc_cz02MTJ4NjEyJnc9MCZrPTIwJmM9ODJldmhBR0hKVmRyYTZramxXTkR3ZG9tcUd1bVVqSm9xcXVHSm1iWUNDNUE9"
          alt="admin"
          className="w-11 h-11 rounded-full object-cover border"
        />

        <div>
          <h3 className="font-semibold text-gray-800">
            Admin
          </h3>

          <p className="text-sm text-gray-500">
            admin@gmail.com
          </p>
        </div>

      </div>

    </div>
  );
}

export default Topheader;