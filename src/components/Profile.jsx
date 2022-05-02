import EditProfileForm from "./EditProfileForm"

export default function Profile({
  currentUserName,
  setCurrentUserName,
  currentUserAvatar,
  setCurrentUserAvatar,
}) {
  return (
    <div>
      <EditProfileForm
        currentUserName={currentUserName}
        setCurrentUserName={setCurrentUserName}
        currentUserAvatar={currentUserAvatar}
        setCurrentUserAvatar={setCurrentUserAvatar}
      />
    </div>
  )
}
