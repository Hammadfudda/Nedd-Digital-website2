<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep all public services in one shared service list; this prevents menus, pages, and forms from drifting out of sync.
- Use existing portfolio assets as the primary visual library across public pages; this keeps imagery authentic and consistent.
- Register dashboard screenshots in the shared portfolio list and reuse their asset pointers across relevant pages; this keeps product and analytics imagery consistent.
