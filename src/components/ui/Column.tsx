import type { FC } from "preact/compat";

interface Props {
  data: {
    imge: string;
    name: string;
    email: string;
    position: string;
    proposition: string;
    status: string;
    portafolio: number;
    created: string;
  };
}

export const Column: FC<Props> = ({ data }) => {
  const {
    imge,
    name,
    email,
    position,
    proposition,
    status,
    portafolio,
    created,
  } = data;

  const progres = (portafolio / 5) * 100;

  return (
    <tr>
      <td class="size-px whitespace-nowrap">
        <div class="py-3 ps-6">
          <label for="hs-at-with-checkboxes-1" class="flex">
            <input
              type="checkbox"
              class="shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-at-with-checkboxes-1"
            />
            <span class="sr-only">Checkbox</span>
          </label>
        </div>
      </td>
      <td class="size-px whitespace-nowrap">
        <div class="py-3 pe-6 ps-6 lg:ps-3 xl:ps-0">
          <div class="flex items-center gap-x-3">
            <img
              class="inline-block size-[38px] rounded-full"
              src={imge}
              alt="Avatar"
            />

            <div class="grow">
              <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                {name}
              </span>
              <span class="block text-sm text-gray-500 dark:text-neutral-500">
                {email}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td class="h-px w-72 whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {position}
          </span>
          <span class="block text-sm text-gray-500 dark:text-neutral-500">
            {proposition}
          </span>
        </div>
      </td>
      <td class="size-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-1.5 py-1 text-xs font-medium text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
            <svg
              class="size-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
            </svg>
            {status}
          </span>
        </div>
      </td>
      <td class="size-px whitespace-nowrap">
        <div class="px-6 py-3">
          <div class="flex items-center gap-x-3">
            <span class="text-xs text-gray-500 dark:text-neutral-500">
              {portafolio}/5
            </span>
            <div class="flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
              <div
                class="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                style={`width: ${progres}%`}
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td class="size-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-500 dark:text-neutral-500">
            {created}
          </span>
        </div>
      </td>
      <td class="size-px whitespace-nowrap">
        <div class="px-6 py-1.5">
          <button class="inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none dark:text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};
