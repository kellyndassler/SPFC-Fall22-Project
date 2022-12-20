import random

a_revolutionary_letter = open("dianediprima.txt", "r").readlines()
a_celebratory_manifesto_of_the_nonbinary_glitch = open("glitchfeminism.txt", "r").readlines()
an_amalgamation_of_freedoms = open("hirschmannfreedom.txt", "r").readlines()
a_question_of_reconstructing_discourse = open("hirschmannquestion.txt", "r").readlines()
a_surrealist_stand_to_power = open("leemillerbathtub.txt", "r").readlines()
a_questioning_of_societal_games = open("joan.txt", "r").readlines()
a_rejection_of_social_expectations = open("joanselfrespect.txt", "r").readlines()
a_set_of_new_axes_on_which_to_spin_our_society = open("markaguharaxes.txt", "r").readlines()

texts_for_the_collective_future = [a_revolutionary_letter, a_celebratory_manifesto_of_the_nonbinary_glitch, an_amalgamation_of_freedoms,a_question_of_reconstructing_discourse,a_surrealist_stand_to_power,a_questioning_of_societal_games,a_rejection_of_social_expectations,a_set_of_new_axes_on_which_to_spin_our_society]
# element of unexpected results from unexpected choices that the world makes for us
def reconstruct_from_an_embodied_stand_to_power():
    random.shuffle(a_rejection_of_social_expectations)
    chosen_text_to_spur_chaos = texts_for_the_collective_future[random.randint(0, len(texts_for_the_collective_future)-1)]
    an_embodied_word = random.randint(0,len(chosen_text_to_spur_chaos))
    an_embodied_phrase = chosen_text_to_spur_chaos[an_embodied_word: an_embodied_word + an_embodied_word]
    return ''.join(an_embodied_phrase)

def main():
    #keep newlines as opportunities for new creation
    #replace all with randomly selected parts of text -- text was selected by me - works or descriptions of works that negoatiate the body, the binary, intersectionality and feminist freedom
    lets_erase_this_non_embodied_bs = open("facebookfirstpressrelease.txt", "r").readlines()
    print(lets_erase_this_non_embodied_bs)

    the_center_must_not_hold_as_sf_socially_hemorrhages = open("joan.txt", "r").readlines()
    the_moment_of_destruction = the_center_must_not_hold_as_sf_socially_hemorrhages[0]
    print(the_moment_of_destruction)
    the_final_say = the_center_must_not_hold_as_sf_socially_hemorrhages[-1]
    print(the_final_say)

    print(len(lets_erase_this_non_embodied_bs)/2)
    from_the_center = int(len(lets_erase_this_non_embodied_bs)/2)

    print(lets_erase_this_non_embodied_bs[from_the_center])
    #destroy the center first
    lets_erase_this_non_embodied_bs[from_the_center] = the_moment_of_destruction

    print(lets_erase_this_non_embodied_bs[from_the_center])
    print(lets_erase_this_non_embodied_bs)

    lets_erase_and_usurp_this_non_embodied_bs = ''.join(lets_erase_this_non_embodied_bs)
    #erase verbs/ability to act autonomously -- impose restrictions on action, present, and future, especially those that allow money and freedom or autnomous choice and any moral choice (still hindered by the past and some actions still sneak through)
    restrict_the_ability_to_act_freely = ["share", "shares","Share", "sharing", "distribute", "sending", "send", "announce", "announcing", "add", "adding", "like", "liking", "enable", "enabling", "surf", "surfing", "allow", "allowing", "click", "clicks", "clicking"]
    for each_action in restrict_the_ability_to_act_freely:
        with_a_reconstructed_action = reconstruct_from_an_embodied_stand_to_power()
        lets_erase_and_usurp_this_non_embodied_bs = lets_erase_and_usurp_this_non_embodied_bs.replace(each_action, with_a_reconstructed_action)
    print(lets_erase_and_usurp_this_non_embodied_bs)
    #remove social connection/organization -- alienation
    restrict_the_ability_connect_and_organize = ["friend", "friends", "partner", "family", "organization", "people", "link", "www."]
    for each_social_connection in restrict_the_ability_connect_and_organize:
        lets_erase_and_usurp_this_non_embodied_bs = lets_erase_and_usurp_this_non_embodied_bs.replace(each_social_connection, " ")
    print(lets_erase_and_usurp_this_non_embodied_bs)

#erase expression -- take out all adjectives
#erase negotation/respect -- remove proper nouns, .com, and 'please'
    restrict_the_ability_to_negotiate_and_be_respected_and_to_enact_power = [".com", "please", "Mark Zuckerberg", "founder", "CEO", "user", "user's", "Users"]
    for each_negotiation in restrict_the_ability_to_negotiate_and_be_respected_and_to_enact_power:
        lets_erase_and_usurp_this_non_embodied_bs = lets_erase_and_usurp_this_non_embodied_bs.replace(each_negotiation, " ")
    print(lets_erase_and_usurp_this_non_embodied_bs)
#erase identity/alienation of self that social media creates -- erase remaining nouns and name
    erasure_of_the_self= ["Facebook", "facebook"]
    for each_remaining_identity in erasure_of_the_self:
        with_a_reconstructed_action = reconstruct_from_an_embodied_stand_to_power()
        lets_erase_and_usurp_this_non_embodied_bs = lets_erase_and_usurp_this_non_embodied_bs.replace(each_remaining_identity, with_a_reconstructed_action)
    print(lets_erase_and_usurp_this_non_embodied_bs)

#create flower using turtle replacing all numbers with num characters/line 
if __name__ == "__main__":
    main()
