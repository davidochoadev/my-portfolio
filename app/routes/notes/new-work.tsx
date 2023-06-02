import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createWork } from "~/models/works.server";
import { requireUserId } from "~/session.server";

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const picture_url = formData.get("picture_url");
  const preview_url = formData.get("preview_url");
  const repo_url = formData.get("repo_url");

  if (typeof title !== "string" || title.length === 0) {
    return json(
      { errors: { title: "Title is required", picture_url: null, preview_url: null, repo_url: null } },
      { status: 400 }
    );
  }

  if (typeof picture_url !== "string" || picture_url.length === 0) {
    return json(
      { errors: { title: null, picture_url: "Picture Preview Url is required", preview_url: null, repo_url: null } },
      { status: 400 }
    );
  }

  if (typeof preview_url !== "string" || preview_url.length === 0) {
    return json(
      { errors: { title: null,picture_url: null, preview_url: "Preview Url is required", repo_url: null } },
      { status: 400 }
    );
  }

  if (typeof repo_url !== "string" || repo_url.length === 0) {
    return json(
      { errors: { title: null, picture_url: null, preview_url: null, repo_url: "Repo Url is required" } },
      { status: 400 }
    );
  }

  const work = await createWork({ title, picture_url , preview_url, repo_url });

  return redirect(`/notes/${work.id}`);
}

export default function NewNotePage() {
  const actionData = useActionData<typeof action>();
  const titleRef = React.useRef<HTMLInputElement>(null);
  const picture_urlRef = React.useRef<HTMLInputElement>(null);
  const preview_urlRef = React.useRef<HTMLInputElement>(null);
  const repo_urlRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.picture_url) {
      picture_urlRef.current?.focus();
    } else if (actionData?.errors?.preview_url) {
      preview_urlRef.current?.focus();
    } else if (actionData?.errors?.repo_url) {
      repo_urlRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Title of work: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.title ? true : undefined}
            aria-errormessage={
              actionData?.errors?.title ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.title && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.title}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Picture Preview URL: </span>
          <input
            ref={picture_urlRef}
            name="picture_url"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.picture_url ? true : undefined}
            aria-errormessage={
              actionData?.errors?.picture_url ? "picture-preview-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.picture_url && (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.picture_url}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Preview URL: </span>
          <input
            ref={preview_urlRef}
            name="preview_url"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.preview_url ? true : undefined}
            aria-errormessage={
              actionData?.errors?.preview_url ? "picture-preview-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.preview_url && (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.preview_url}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Repo URL: </span>
          <input
            ref={repo_urlRef}
            name="repo_url"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.repo_url ? true : undefined}
            aria-errormessage={
              actionData?.errors?.repo_url ? "picture-preview-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.repo_url && (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.repo_url}
          </div>
        )}
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
