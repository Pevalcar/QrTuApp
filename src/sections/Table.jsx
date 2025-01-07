import { Column } from "@components/ui/Column";

const data = [
  {
    imge: "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    name: "Christina Bersh",
    email: "christina@site.com",
    position: "Human resources",
    proposition: "Director",
    status: "Active",
    portafolio: "1",
    created: "28 Dec, 12:12",
  },
  {
    imge: "https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
    name: "Anne Richard",
    email: "anne@site.com",
    position: "IT department",
    proposition: "Developer",
    status: "Active",
    portafolio: "5",
    created: "20 Dec, 09:27",
  },
  {
    imge: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    name: "David Harrison",
    email: "david@site.com",
    position: "Mobile app",
    proposition: "Accountant",
    status: "Active",
    portafolio: "0",
    created: "18 Dec, 15:20",
  },
  {
    imge: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    name: "Jessica Williams",
    email: "myhairisred@site.com",
    position: "Marketing",
    proposition: "Executive director",
    status: "Inactive",
    portafolio: "3",
    created: "18 Dec, 15:20",
  },
  {
    imge: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    name: "Brian Halligan",
    email: "brian@site.com",
    position: "Branding products",
    proposition: "Seller",
    status: "Active",
    portafolio: "5",
    created: "18 Dec, 15:20",
  },
  {
    imge: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    name: "Samia Kartoon",
    email: "samia@site.com",
    position: "IT department",
    proposition: "Developer",
    status: "Active",
    portafolio: "0",
    created: "18 Dec, 15:20",
  },
  {
    imge: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    name: "Bart Simpson",
    email: "Bart@site.com",
    position: "IT department",
    proposition: "Developer",
    status: "Active",
    portafolio: "3",
    created: "18 Dec, 15:20",
  },
  {
    imge: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    name: "David Harrison",
    email: "david@site.com",
    position: "Mobile app",
    proposition: "Accountant",
    status: "Active",
    portafolio: "0",
    created: "18 Dec, 15:20",
  },
];

export const Table = () => {
  return (
    <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="inline-block min-w-full p-1.5 align-middle">
            <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <div class="grid gap-3 border-b border-gray-200 px-6 py-4 dark:border-neutral-700 md:flex md:items-center md:justify-between">
                <div>
                  <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Users
                  </h2>
                  <p class="text-sm text-gray-600 dark:text-neutral-400">
                    Add users, edit and more.
                  </p>
                </div>

                <div>
                  <div class="inline-flex gap-x-2">
                    <a
                      class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      View all
                    </a>

                    <a
                      class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      <svg
                        class="size-4 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      Add user
                    </a>
                  </div>
                </div>
              </div>
              <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead class="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" class="py-3 ps-6 text-start">
                      <label for="hs-at-with-checkboxes-main" class="flex">
                        <input
                          type="checkbox"
                          class="shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-at-with-checkboxes-main"
                        />
                        <span class="sr-only">Checkbox</span>
                      </label>
                    </th>

                    <th
                      scope="col"
                      class="py-3 pe-6 ps-6 text-start lg:ps-3 xl:ps-0"
                    >
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Name
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Position
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Portfolio
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Created
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-end"></th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  {data.map((item) => (
                    <Column data={item} />
                  ))}
                </tbody>
              </table>
              <div class="grid gap-3 border-t border-gray-200 px-6 py-4 dark:border-neutral-700 md:flex md:items-center md:justify-between">
                <div>
                  <p class="text-sm text-gray-600 dark:text-neutral-400">
                    <span class="font-semibold text-gray-800 dark:text-neutral-200">
                      12
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div class="inline-flex gap-x-2">
                    <button
                      type="button"
                      class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      <svg
                        class="size-4 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      Next
                      <svg
                        class="size-4 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
